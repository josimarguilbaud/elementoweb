/* Comportamiento del demo de Praderas de Arraiján. Sin dependencias. */
(function () {
  var P = window.PRADERAS || { modelos: {}, lotes: [] };
  var M = P.modelos;
  var reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var usd = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };
  var wa = function (txt) { return 'https://wa.me/' + P.whatsapp + '?text=' + encodeURIComponent(txt); };
  var base = document.body.getAttribute('data-base') || '';

  /* franja de vista previa */
  var franja = $('.franja');
  if (franja) {
    try { if (sessionStorage.getItem('praderas-franja') === '0') franja.hidden = true; } catch (e) {}
    var cerrar = $('button', franja);
    if (cerrar) cerrar.addEventListener('click', function () {
      franja.hidden = true;
      try { sessionStorage.setItem('praderas-franja', '0'); } catch (e) {}
    });
  }

  /* menú móvil */
  var nav = $('.nav'), menu = $('.nav-menu');
  if (menu) menu.addEventListener('click', function () {
    var ab = nav.classList.toggle('abierto');
    menu.setAttribute('aria-expanded', ab ? 'true' : 'false');
  });

  /* video del héroe: sin reproducción automática si la persona pidió menos movimiento */
  var hv = $('.heroe video');
  if (hv && reducir) { hv.removeAttribute('autoplay'); hv.pause(); }

  /* videos de los renders: se cargan al acercarse y se reproducen a la vista o al pasar el mouse */
  function prepararVideo(cont) {
    var v = $('video', cont);
    if (!v || reducir) return;
    var cargar = function () { if (!v.src) { v.src = base + v.getAttribute('data-src'); v.load(); } };
    var play = function () { cargar(); var p = v.play(); if (p && p.then) p.then(function () { cont.classList.add('vivo'); }).catch(function () {}); };
    var pausa = function () { v.pause(); };
    var hover = window.matchMedia('(hover: hover)').matches;
    if (hover && !cont.hasAttribute('data-auto')) {
      cont.addEventListener('mouseenter', play);
      cont.addEventListener('mouseleave', pausa);
      cont.addEventListener('focusin', play);
    } else if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) play(); else pausa(); });
      }, { threshold: 0.55 }).observe(cont);
    }
  }
  $$('[data-video]').forEach(prepararVideo);

  /* buscador de casa en el héroe */
  var busc = $('[data-buscador]');
  if (busc) {
    var filtro = { rec: null, plantas: null };
    $$('.chip', busc).forEach(function (ch) {
      ch.addEventListener('click', function () {
        var k = ch.getAttribute('data-k'), v = Number(ch.getAttribute('data-v'));
        var on = ch.getAttribute('aria-pressed') !== 'true';
        $$('.chip[data-k="' + k + '"]', busc).forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
        ch.setAttribute('aria-pressed', on ? 'true' : 'false');
        filtro[k] = on ? v : null;
        var n = 0;
        Object.keys(M).forEach(function (id) {
          var ok = (!filtro.rec || M[id].rec === filtro.rec) && (!filtro.plantas || M[id].plantas === filtro.plantas);
          if (ok) n++;
          var card = $('[data-modelo-card="' + id + '"]');
          if (card) {
            card.classList.toggle('destacado', ok && (filtro.rec || filtro.plantas));
            card.classList.toggle('atenuado', !ok);
          }
        });
        var b = $('[data-buscador-btn]', busc);
        if (b) b.textContent = n === 1 ? 'Ver el modelo que encaja' : (n === 0 ? 'Ver todos los modelos' : 'Ver los ' + n + ' modelos');
      });
    });
  }

  /* contadores de lotes disponibles */
  var disp = P.lotes.filter(function (l) { return l.estado === 'disponible'; });
  var cuenta = { disponibles: disp.length, total: P.lotes.length };
  ['reservado', 'vendido'].forEach(function (e) { cuenta[e + 's'] = P.lotes.filter(function (l) { return l.estado === e; }).length; });
  $$('[data-cuenta]').forEach(function (el) { el.textContent = cuenta[el.getAttribute('data-cuenta')]; });

  /* calculadora de letra (sistema francés) */
  function letraMensual(precio, abonoPct, anos, tasa) {
    var monto = precio * (1 - abonoPct / 100), r = tasa / 100 / 12, n = anos * 12;
    if (r === 0) return { letra: monto / n, monto: monto };
    return { letra: monto * r / (1 - Math.pow(1 + r, -n)), monto: monto };
  }
  var DEF = { abono: 5, anos: 30, tasa: 6.5 };

  $$('[data-calc]').forEach(function (c) {
    var f = {
      modelo: $('[name="modelo"]', c), precio: $('[name="precio"]', c), abono: $('[name="abono"]', c),
      anos: $('[name="anos"]', c), tasa: $('[name="tasa"]', c)
    };
    var out = function (k) { return $('[data-out="' + k + '"]', c); };
    function calcular() {
      var precio = Number(f.precio.value) || 0, ab = Number(f.abono.value), anos = Number(f.anos.value), tasa = Number(f.tasa.value) || 0;
      var r = letraMensual(precio, ab, anos, tasa);
      out('abono-pct').textContent = ab + ' %';
      out('letra').textContent = usd(r.letra);
      out('monto').textContent = usd(r.monto);
      out('abono').textContent = usd(precio * ab / 100);
      out('ingreso').textContent = usd(r.letra / 0.3);
      var nom = M[f.modelo.value] ? M[f.modelo.value].nombre : 'Praderas';
      var btn = $('[data-calc-wa]', c);
      if (btn) btn.href = wa('Hola, calculé mi letra en la web: modelo ' + nom + ', precio ' + usd(precio) + ', abono ' + ab + ' %, ' + anos + ' años. Me sale ' + usd(r.letra) + ' al mes. ¿Me ayudan a precalificar?');
    }
    f.modelo.addEventListener('change', function () {
      var m = M[f.modelo.value]; if (m) f.precio.value = m.precio; calcular();
    });
    ['precio', 'abono', 'anos', 'tasa'].forEach(function (k) { f[k].addEventListener('input', calcular); });
    calcular();
  });

  /* plano de lotes */
  var SVGNS = 'http://www.w3.org/2000/svg';
  function el(tag, at, padre) {
    var e = document.createElementNS(SVGNS, tag);
    for (var k in at) e.setAttribute(k, at[k]);
    if (padre) padre.appendChild(e);
    return e;
  }
  function texto(t, at, padre) { var e = el('text', at, padre); e.textContent = t; return e; }

  function dibujarFondo(svg) {
    el('rect', { x: 0, y: 0, width: 1000, height: 620, fill: '#dfe8d2' }, svg);
    // vía principal y redondel de acceso
    var via = 'M-10 585 C 260 560 560 600 840 556 C 930 540 962 470 948 360 C 936 260 900 150 1010 70';
    el('path', { d: via, fill: 'none', stroke: '#cdc5b1', 'stroke-width': 26, 'stroke-linecap': 'round' }, svg);
    el('path', { d: via, fill: 'none', stroke: '#fff', 'stroke-width': 1.5, 'stroke-dasharray': '10 10' }, svg);
    el('path', { d: 'M842 552 L 790 512', stroke: '#cdc5b1', 'stroke-width': 18, 'stroke-linecap': 'round' }, svg);
    el('circle', { cx: 858, cy: 560, r: 30, fill: 'none', stroke: '#cdc5b1', 'stroke-width': 16 }, svg);
    el('circle', { cx: 858, cy: 560, r: 18, fill: '#b9d1a6' }, svg);
    texto('VÍA PRINCIPAL', { x: 360, y: 604, class: 'etq-svg', opacity: .65 }, svg);
    // árboles alrededor
    var s = 7; function r() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
    for (var i = 0; i < 230; i++) {
      var x = r() * 1000, y = r() * 620;
      var dentro = x > 140 && x < 800 && y > 86 && y < 522;
      var amen = x > 798 && x < 945 && y > 96 && y < 470;
      if (dentro || amen || (y > 540 && y < 610) ) continue;
      var tono = ['#9dc08b', '#86b075', '#b6cf96', '#e3a64a'][r() < .08 ? 3 : Math.floor(r() * 3)];
      el('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: (5 + r() * 8).toFixed(1), fill: tono, opacity: .95 }, svg);
    }
    // cerca perimetral y calles internas
    el('rect', { x: 140, y: 86, width: 660, height: 436, rx: 22, fill: '#efe9da', stroke: '#9bb08c', 'stroke-width': 2, 'stroke-dasharray': '2 5' }, svg);
    // patios de cada manzana
    [112, 196, 280, 364, 448].forEach(function (y) {
      el('rect', { x: 162, y: y - 5, width: 296, height: 64, rx: 8, fill: '#d6e3c9' }, svg);
      el('rect', { x: 480, y: y - 5, width: 296, height: 64, rx: 8, fill: '#d6e3c9' }, svg);
    });
    texto('ETAPA 1', { x: 168, y: 101, class: 'etq-svg' }, svg);
    texto('ETAPA 2', { x: 486, y: 101, class: 'etq-svg' }, svg);
    texto('ETAPA 3 · PREVENTA', { x: 486, y: 353, class: 'etq-svg' }, svg);
    // amenidades
    var g = el('g', {}, svg);
    el('rect', { x: 812, y: 108, width: 118, height: 74, rx: 6, fill: '#6fae63', stroke: '#fff', 'stroke-width': 2 }, g);
    el('line', { x1: 871, y1: 110, x2: 871, y2: 180, stroke: '#fff', 'stroke-width': 1.5 }, g);
    el('circle', { cx: 871, cy: 145, r: 11, fill: 'none', stroke: '#fff', 'stroke-width': 1.5 }, g);
    texto('CANCHA', { x: 846, y: 198, class: 'etq-svg' }, g);
    el('circle', { cx: 846, cy: 240, r: 24, fill: '#f3d27d', stroke: '#fff', 'stroke-width': 2 }, g);
    texto('PARQUE', { x: 822, y: 282, class: 'etq-svg' }, g);
    el('path', { d: 'M886 222 c 30 -10 44 20 30 38 c -12 16 -40 4 -30 22 c 8 14 34 6 30 22 c -6 18 -44 12 -40 -8 c 4 -18 -16 -22 -14 -40 c 2 -18 12 -30 24 -34 z', fill: '#4a4a44', stroke: '#fff', 'stroke-width': 2 }, g);
    texto('PUMPTRACK', { x: 872, y: 330, class: 'etq-svg' }, g);
    el('rect', { x: 812, y: 350, width: 72, height: 44, rx: 10, fill: '#8cc47c', stroke: '#fff', 'stroke-width': 2 }, g);
    [[826, 362], [846, 380], [868, 364]].forEach(function (p) { el('circle', { cx: p[0], cy: p[1], r: 2.6, fill: '#fff' }, g); });
    texto('MINI GOLF', { x: 812, y: 410, class: 'etq-svg' }, g);
    el('circle', { cx: 912, cy: 430, r: 15, fill: '#9cc6e0', stroke: '#fff', 'stroke-width': 2 }, g);
    texto('TANQUE DE AGUA', { x: 852, y: 462, class: 'etq-svg', 'text-anchor': 'start' }, g);
    texto('ACCESO', { x: 770, y: 540, class: 'etq-svg' }, g);
    // norte y nota
    var n = el('g', { transform: 'translate(70 70)' }, svg);
    el('circle', { r: 22, fill: '#fff', opacity: .85 }, n);
    el('path', { d: 'M0 -15 L7 8 L0 3 L-7 8 Z', fill: '#11302a' }, n);
    texto('N', { x: -4, y: 20, class: 'etq-svg', 'font-size': 9 }, n);
    texto('PLANO ILUSTRATIVO · DISPONIBILIDAD DE EJEMPLO', { x: 980, y: 24, class: 'etq-svg', opacity: .6, 'font-size': 8, 'text-anchor': 'end' }, svg);
  }

  function prepararPlano(wrap) {
    var svg = $('svg', wrap), tip = $('.plano-tip', wrap);
    var host = wrap.closest('[data-mapa]') || document;
    var ficha = $('[data-ficha]', host);
    dibujarFondo(svg);
    var capa = el('g', {}, svg), nodos = {};
    P.lotes.forEach(function (l) {
      var m = M[l.modelo];
      var r = el('rect', { x: l.x, y: l.y, width: l.w, height: l.h, rx: 2.5, class: 'lote ' + l.estado, 'data-id': l.id }, capa);
      if (l.estado !== 'vendido') {
        r.setAttribute('tabindex', '0');
        r.setAttribute('role', 'button');
        r.setAttribute('aria-label', 'Lote ' + l.id + ', modelo ' + m.nombre + ', ' + l.estado);
      }
      nodos[l.id] = r;
    });
    var porId = {}; P.lotes.forEach(function (l) { porId[l.id] = l; });

    function mostrarTip(l, evt) {
      if (!tip) return;
      var caja = wrap.getBoundingClientRect(), rr = nodos[l.id].getBoundingClientRect();
      tip.innerHTML = '<b>Lote ' + l.id + '</b> · ' + M[l.modelo].nombre + ' · ' + l.estado;
      tip.style.left = (rr.left + rr.width / 2 - caja.left) + 'px';
      tip.style.top = (rr.top - caja.top) + 'px';
      tip.classList.add('ver');
    }
    capa.addEventListener('mouseover', function (e) { var id = e.target.getAttribute('data-id'); if (id) mostrarTip(porId[id], e); });
    capa.addEventListener('mouseout', function () { if (tip) tip.classList.remove('ver'); });

    var sel = null;
    function elegir(id) {
      var l = porId[id]; if (!l || l.estado === 'vendido') return;
      if (sel) nodos[sel].classList.remove('sel');
      sel = id; nodos[id].classList.add('sel');
      if (ficha) llenarFicha(ficha, l);
    }
    capa.addEventListener('click', function (e) { var id = e.target.getAttribute('data-id'); if (id) elegir(id); });
    capa.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { var id = e.target.getAttribute('data-id'); if (id) { e.preventDefault(); elegir(id); } }
    });

    // filtros
    $$('[data-filtro]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        $$('[data-filtro]', host).forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        var f = b.getAttribute('data-filtro');
        P.lotes.forEach(function (l) {
          var ver = f === 'todos' || (f === 'disponibles' ? l.estado === 'disponible' : l.modelo === f);
          nodos[l.id].classList.toggle('oculto', !ver);
        });
        pintarLista(f);
      });
    });

    // lista accesible de lotes disponibles
    var lista = $('[data-lista-lotes]', host);
    function pintarLista(f) {
      if (!lista) return;
      lista.innerHTML = '';
      disp.filter(function (l) { return !f || f === 'todos' || f === 'disponibles' || l.modelo === f; }).slice(0, 24).forEach(function (l) {
        var b = document.createElement('button');
        b.type = 'button';
        b.innerHTML = '<b>Lote ' + l.id + '</b><span>' + M[l.modelo].nombre + ' · ' + usd(l.precio) + (M[l.modelo].ejemplo ? '*' : '') + '</span>';
        b.addEventListener('click', function () { elegir(l.id); nodos[l.id].scrollIntoView({ block: 'nearest', inline: 'center' }); });
        lista.appendChild(b);
      });
    }
    pintarLista('todos');

    // lote inicial elegido para que la ficha no salga vacía
    var inicial = disp.filter(function (l) { return l.etapa === 2 && l.modelo === 'cedro'; })[3] || disp[0];
    if (inicial && wrap.hasAttribute('data-preseleccion')) elegir(inicial.id);
  }

  function llenarFicha(f, l) {
    var m = M[l.modelo], r = letraMensual(l.precio, DEF.abono, DEF.anos, DEF.tasa);
    var est = l.estado === 'disponible' ? 'Disponible' : 'Reservado';
    f.innerHTML =
      '<div class="ficha-cab"><div><p>Etapa ' + l.etapa + (l.etapa === 3 ? ' · preventa' : '') + '</p><h3>Lote ' + l.id + '</h3></div>' +
      '<span class="sello ' + l.estado + '">' + est + '</span></div>' +
      '<img class="ficha-img" src="' + base + m.img + '-700.webp" alt="Modelo ' + m.nombre + ' al atardecer" width="700" height="700">' +
      '<div class="ficha-cuerpo"><dl>' +
      '<dt>Modelo</dt><dd>' + m.nombre + '</dd>' +
      '<dt>Tipo</dt><dd>' + m.tipo + '</dd>' +
      '<dt>Recámaras · baños</dt><dd>' + m.rec + ' · ' + m.banos + '</dd>' +
      '<dt>Ubicación</dt><dd>' + (l.esquina ? 'Esquina' : 'Medianero') + '</dd>' +
      '<dt>Precio</dt><dd>' + usd(l.precio) + (m.ejemplo || l.esquina ? ' <span class="marca-ej">ejemplo</span>' : '') + '</dd>' +
      '</dl><div class="ficha-letra"><span>Letra estimada<br>abono 5 % · 30 años · 6.5 %</span><b>' + usd(r.letra) + '</b></div>' +
      (l.estado === 'disponible'
        ? '<a class="btn btn--ambar" href="' + wa('Hola, me interesa el lote ' + l.id + ' (modelo ' + m.nombre + ') de Praderas de Arraiján. ¿Puedo agendar una visita a la casa modelo?') + '" target="_blank" rel="noopener">Agendar visita para este lote</a>'
        : '<a class="btn btn--linea" href="' + wa('Hola, vi que el lote ' + l.id + ' está reservado. ¿Me avisan si se libera o qué lotes parecidos quedan?') + '" target="_blank" rel="noopener">Avisarme si se libera</a>') +
      '<a class="btn btn--linea" href="' + base + 'modelos/#' + l.modelo + '">Ver el modelo ' + m.nombre + '</a></div>';
  }
  $$('[data-plano]').forEach(prepararPlano);

  /* formulario de visita por pasos */
  var form = $('[data-visita]');
  if (form) {
    var pasos = $$('.paso', form), barras = $$('.pasos i', form), i = 0, datos = {};
    function ir(n) {
      pasos.forEach(function (p, k) { p.classList.toggle('activo', k === n); });
      barras.forEach(function (b, k) { b.classList.toggle('hecho', k <= n); });
      i = n;
      var foco = $('button, input, select', pasos[n]); if (foco) foco.focus({ preventScroll: true });
    }
    $$('[data-elige]', form).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-elige');
        $$('[data-elige="' + k + '"]', form).forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        datos[k] = b.getAttribute('data-valor');
      });
    });
    $$('[data-sig]', form).forEach(function (b) { b.addEventListener('click', function () { ir(Math.min(i + 1, pasos.length - 1)); }); });
    $$('[data-ant]', form).forEach(function (b) { b.addEventListener('click', function () { ir(Math.max(i - 1, 0)); }); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nombre = (form.nombre.value || '').trim();
      if (!nombre || !form.telefono.value.trim()) {
        var err = $('[data-error]', form); err.hidden = false; (nombre ? form.telefono : form.nombre).focus(); return;
      }
      var modelo = datos.modelo ? M[datos.modelo].nombre : 'aún no decido';
      var dia = datos.dia || 'el día que me indiquen';
      pasos.forEach(function (p) { p.classList.remove('activo'); });
      var listo = $('.listo', form);
      $('[data-listo-txt]', listo).textContent = 'Listo, ' + nombre.split(' ')[0] + '. Un asesor te escribe por WhatsApp para confirmar tu visita de ' + dia + ' a la casa modelo ' + (datos.modelo ? M[datos.modelo].nombre : '') + '.';
      $('[data-listo-wa]', listo).href = wa('Hola, soy ' + nombre + '. Quiero visitar la casa modelo (' + modelo + ') ' + dia + '. Ingreso familiar: ' + form.ingreso.value + '.');
      listo.classList.add('activo');
      barras.forEach(function (b) { b.classList.add('hecho'); });
    });
  }

  /* visor de planos y fotos */
  var visor = $('.visor');
  if (visor) {
    var img = null, cerrarV = $('button', visor), ultimo = null;
    $$('[data-zoom]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!img) { img = document.createElement('img'); visor.insertBefore(img, cerrarV); }
        ultimo = b; img.src = b.getAttribute('data-zoom'); img.alt = b.getAttribute('aria-label') || '';
        visor.classList.add('abierto'); cerrarV.focus();
      });
    });
    var cerrarVisor = function () { visor.classList.remove('abierto'); if (ultimo) ultimo.focus(); };
    cerrarV.addEventListener('click', cerrarVisor);
    visor.addEventListener('click', function (e) { if (e.target === visor) cerrarVisor(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && visor.classList.contains('abierto')) cerrarVisor(); });
  }

  /* recorrido 3D: se carga al pedirlo, sin sacar a la persona de la página */
  $$('[data-tour]').forEach(function (t) {
    var b = $('.tour-btn', t);
    b.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = t.getAttribute('data-tour'); f.title = 'Recorrido 3D del modelo'; f.allow = 'fullscreen; xr-spatial-tracking'; f.allowFullscreen = true;
      t.innerHTML = ''; t.appendChild(f);
    });
  });

  /* pestañas de modelos */
  var tabs = $$('.tabs a');
  if (tabs.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        tabs.forEach(function (a) { a.classList.toggle('activo', a.getAttribute('href') === '#' + e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('.ficha-modelo').forEach(function (s) { io.observe(s); });
  }

  /* año del pie */
  $$('[data-ano]').forEach(function (e) { e.textContent = new Date().getFullYear(); });
})();
