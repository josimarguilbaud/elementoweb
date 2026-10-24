/* Comportamiento del demo de Praderas de Arraiján. Sin dependencias.
   Arma la cabecera, el pie, las tarjetas y páginas de modelo, la calculadora, la agenda y el comparador
   a partir de assets/data.js, para que las 9 páginas no repitan el mismo HTML. */
(function () {
  var P = window.PRADERAS || { modelos: {}, lotes: [] };
  var M = P.modelos, IDS = ['roble', 'cedro', 'almendro'];
  var reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var usd = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };
  var wa = function (txt) { return 'https://wa.me/' + P.whatsapp + '?text=' + encodeURIComponent(txt); };
  var B = document.body.getAttribute('data-base') || '';
  var pagina = document.body.getAttribute('data-pagina') || '';
  var WA_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.7-.85-2-.95-.26-.1-.46-.15-.65.15-.19.28-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.15-1.23-.45-2.35-1.44-.87-.78-1.45-1.73-1.62-2.02-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.56c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.14.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.69.22 1.31.19 1.81.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.25-1.24A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>';

  function letra(precio, abono, anos, tasa) {
    var monto = Math.max(precio - abono, 0), r = tasa / 100 / 12, n = anos * 12;
    return { cuota: r === 0 ? monto / n : monto * r / (1 - Math.pow(1 + r, -n)), monto: monto };
  }
  function cuotaBase(precio) { return letra(precio, precio * P.abonoPct / 100, P.plazo, P.tasa).cuota; }

  /* ---------- cabecera, franja y pie ---------- */
  var cab = $('#cabecera');
  if (cab) {
    var a = function (href, txt, cur) { return '<a href="' + B + href + '"' + (cur ? ' aria-current="page"' : '') + '>' + txt + '</a>'; };
    cab.innerHTML =
      '<div class="franja" role="note"><span><b>Vista previa</b> de Elemento Web para Praderas de Arraiján · precios según su guía, por confirmar · lotes y horarios de ejemplo</span><button type="button" aria-label="Ocultar este aviso">×</button></div>' +
      '<header class="nav"><div class="cont nav-in">' +
      '<a class="nav-logo" href="' + B + './" aria-label="Praderas de Arraiján, inicio"><img src="' + B + 'img/logo-praderas.png" alt="Praderas de Arraiján" width="650" height="382"></a>' +
      '<ul class="nav-links" id="menu">' +
      '<li>' + a('./', 'Inicio', pagina === 'inicio') + '</li>' +
      '<li><button type="button" aria-expanded="false">Modelos</button><div class="desp">' +
        '<p>Modelo unifamiliar</p>' + a('modelos/roble/', 'Roble') + a('modelos/cedro/', 'Cedro') +
        '<p>Modelo dúplex</p>' + a('modelos/almendro/', 'Almendro') +
        '<p>Tu próximo hogar</p>' + a('compara/', 'Compara los modelos') + a('#cuota', 'Calcula tu cuota') + a('agenda/', 'Agenda tu visita hoy') + '</div></li>' +
      '<li>' + a('#ubicacion', 'Ubicación') + '</li>' +
      '<li>' + a('#cuota', 'Calcula tu cuota') + '</li>' +
      '<li>' + a('compara/', 'Compara', pagina === 'compara') + '</li>' +
      '<li><button type="button" aria-expanded="false">Explora</button><div class="desp desp--ancho">' +
        '<div><p>El proyecto</p>' + a('#proyecto', 'Conoce el proyecto') + a('modelos/#galeria', 'Galería') + a('#amenidades', 'Amenidades') + a('#ubicacion', 'Ubicación') + a('disponibilidad/', 'Lotes disponibles') + '</div>' +
        '<div><p>Información para comprar</p>' + a('#requisitos', 'Requisitos para aplicar') + a('#proceso', 'Proceso de compra') + a('#preguntas', 'Preguntas frecuentes') +
        '<p>Conoce más</p>' + a('#testimonios', 'Testimonios') + a('#promociones', 'Promociones') + a('#contacto', 'Contacto') + '</div></div></li>' +
      '<li class="solo-movil"><a class="btn btn--cafe" href="' + B + 'agenda/">Agenda tu visita</a></li>' +
      '</ul>' +
      '<a class="btn btn--cafe btn--nav" href="' + B + 'agenda/">Agenda tu visita</a>' +
      '<button class="nav-menu" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button>' +
      '</div></header>';
  }
  var pie = $('#pie');
  if (pie) {
    var l = function (href, txt) { return '<li><a href="' + B + href + '">' + txt + '</a></li>'; };
    pie.innerHTML = '<footer class="pie"><div class="cont"><div class="pie-grid">' +
      '<div class="pie-legacy"><img src="' + B + 'img/logo-legacy.png" alt="Grupo Legacy Inmobiliaria" width="1021" height="350"><p>Praderas de Arraiján es un proyecto residencial de Grupo Legacy Inmobiliaria.</p>' +
      '<div class="redes"><a href="https://www.instagram.com/praderasdearraijan/" target="_blank" rel="noopener" aria-label="Instagram de Praderas">IG</a><a href="https://www.facebook.com/grupolegacypty" target="_blank" rel="noopener" aria-label="Facebook de Grupo Legacy">FB</a><a href="https://www.linkedin.com/company/grupo-legacy-pty" target="_blank" rel="noopener" aria-label="LinkedIn de Grupo Legacy">in</a></div></div>' +
      '<div><h4>Contáctanos</h4><ul><li><b>Teléfono:</b> <a href="tel:+5073812102">(507) 381-2102</a></li><li><b>WhatsApp:</b> <a href="https://wa.me/50760306736" target="_blank" rel="noopener">6030-6736</a> · <a href="https://wa.me/50765326708" target="_blank" rel="noopener">6532-6708</a></li><li><b>Correo:</b> <a href="mailto:ventas@glegacypanama.com">ventas@glegacypanama.com</a></li><li><b>Oficina:</b> Vía España, PH Domino, planta baja, local #3, Ciudad de Panamá</li></ul></div>' +
      '<div><h4>Explora más</h4><ul class="pie-links">' + l('modelos/', 'Modelos') + l('#ubicacion', 'Ubicación') + l('#amenidades', 'Amenidades') + l('#cuota', 'Calcula tu cuota') + l('compara/', 'Compara modelos') + l('agenda/', 'Agenda tu visita') + l('#proceso', 'Proceso de compra') + l('#testimonios', 'Testimonios') + l('#promociones', 'Promociones') + l('modelos/#galeria', 'Galería') + l('#preguntas', 'Preguntas frecuentes') + l('#contacto', 'Contacto') + '</ul></div>' +
      '</div><div class="pie-legal"><span>© <span data-ano>2026</span> Praderas de Arraiján · Grupo Legacy Inmobiliaria · <a href="' + B + 'privacidad/">Política de privacidad</a></span><span>Vista previa preparada por Elemento Web</span><a class="btn btn--linea btn--chico" href="#">Regresar al inicio</a></div></div></footer>';
  }
  var flot = document.createElement('a');
  flot.className = 'wa-flot'; flot.target = '_blank'; flot.rel = 'noopener'; flot.setAttribute('aria-label', 'Escríbenos por WhatsApp');
  flot.href = wa('Hola, vi la web de Praderas de Arraiján y quiero más información.'); flot.innerHTML = WA_SVG;
  document.body.appendChild(flot);

  var franja = $('.franja');
  if (franja) {
    try { if (sessionStorage.getItem('praderas-franja') === '0') franja.hidden = true; } catch (e) {}
    $('button', franja).addEventListener('click', function () { franja.hidden = true; try { sessionStorage.setItem('praderas-franja', '0'); } catch (e) {} });
  }
  var nav = $('.nav'), menu = $('.nav-menu');
  if (menu) menu.addEventListener('click', function () { var ab = nav.classList.toggle('abierto'); menu.setAttribute('aria-expanded', ab ? 'true' : 'false'); });
  $$('.nav-links > li > button').forEach(function (b) {
    var li = b.parentNode;
    var abrir = function (on) { $$('.nav-links > li.abierto').forEach(function (o) { if (o !== li) { o.classList.remove('abierto'); $('button', o).setAttribute('aria-expanded', 'false'); } }); li.classList.toggle('abierto', on); b.setAttribute('aria-expanded', on ? 'true' : 'false'); };
    b.addEventListener('click', function (e) { e.stopPropagation(); abrir(!li.classList.contains('abierto')); });
    if (window.matchMedia('(hover: hover) and (min-width: 1101px)').matches) {
      li.addEventListener('mouseenter', function () { abrir(true); });
      li.addEventListener('mouseleave', function () { abrir(false); });
    }
  });
  document.addEventListener('click', function () { $$('.nav-links > li.abierto').forEach(function (o) { o.classList.remove('abierto'); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') $$('.nav-links > li.abierto').forEach(function (o) { o.classList.remove('abierto'); }); });

  /* ---------- tarjetas de modelos ---------- */
  function tarjeta(id) {
    var m = M[id];
    return '<article class="modelo">' +
      '<div class="modelo-media" data-video><img src="' + B + m.img + '-700.webp" srcset="' + B + m.img + '-700.webp 700w, ' + B + m.img + '.webp 1200w" sizes="(max-width: 960px) 92vw, 380px" alt="Modelo ' + m.nombre + ' al atardecer" width="700" height="700" loading="lazy"><video muted playsinline preload="none" data-src="' + m.video + '" aria-hidden="true"></video></div>' +
      '<div class="minis">' + m.minis.map(function (n) { return '<img src="' + B + 'img/' + n + '.webp" alt="" width="240" height="240" loading="lazy">'; }).join('') + '</div>' +
      '<div class="modelo-cuerpo"><div class="modelo-tit"><div><h3>Modelo ' + m.nombre + '</h3><p>' + m.lema + '</p></div>' +
      '<ul class="specs-l"><li><b>' + m.rec + '</b> recámaras</li><li><b>' + m.banos + '</b> baños</li><li><b>' + m.estac + '</b> estacionamiento' + (m.estac > 1 ? 's' : '') + '</li></ul></div>' +
      '<div class="modelo-pie"><div class="precio"><small>Desde</small><b>' + usd(m.precio) + '</b></div><a class="btn btn--cafe btn--chico" href="' + B + 'modelos/' + id + '/">Ver modelo</a></div></div></article>';
  }
  $$('[data-tarjetas]').forEach(function (c) { c.innerHTML = IDS.map(tarjeta).join(''); });

  /* ---------- calculadora de cuota (tasa fija de referencia, como pide la guía) ---------- */
  function calcHTML(sel) {
    return '<div class="calc" data-calc><div class="calc-form">' +
      '<div class="campo"><label for="c-modelo">Modelo de vivienda</label><select id="c-modelo" name="modelo">' +
      IDS.map(function (id) { return '<option value="' + id + '"' + (id === sel ? ' selected' : '') + '>Modelo ' + M[id].nombre + '</option>'; }).join('') + '</select></div>' +
      '<div class="campo"><label for="c-precio">Precio de la vivienda (USD)</label><div class="con-signo"><span>$</span><input id="c-precio" name="precio" type="number" inputmode="numeric" min="40000" step="1" value="' + M[sel].precio + '"></div></div>' +
      '<div class="campo"><label for="c-abono">Abono inicial (USD) <output data-out="abono-pct"></output></label><div class="con-signo"><span>$</span><input id="c-abono" name="abono" type="number" inputmode="numeric" min="0" step="100" value="' + Math.round(M[sel].precio * P.abonoPct / 100) + '"></div></div>' +
      '<div class="campo"><label for="c-anos">Plazo de financiamiento</label><select id="c-anos" name="anos"><option value="15">15 años</option><option value="20">20 años</option><option value="25">25 años</option><option value="30" selected>30 años</option></select></div>' +
      '</div><div class="calc-res" aria-live="polite"><p class="etq-res">Resultado estimado</p><p class="cuota"><span data-out="cuota">—</span><small>/mes</small></p>' +
      '<dl><dt>Modelo seleccionado</dt><dd data-out="modelo"></dd><dt>Precio del modelo</dt><dd data-out="precio"></dd><dt>Abono inicial</dt><dd data-out="abono"></dd><dt>Monto a financiar</dt><dd data-out="monto"></dd><dt>Plazo de financiamiento</dt><dd data-out="plazo"></dd><dt>Tasa de referencia</dt><dd>' + P.tasa + ' % anual</dd><dt>Ingreso familiar sugerido</dt><dd data-out="ingreso"></dd></dl>' +
      '<a class="btn btn--cafe" data-calc-wa href="#" target="_blank" rel="noopener">Quiero conocer mis opciones</a>' +
      '<p class="aviso"><b>Simulación referencial.</b> No representa una oferta bancaria ni una cotización oficial. La aprobación, la tasa, el plazo y la cuota final dependen de la entidad financiera y de tu evaluación crediticia. La tasa de referencia la define Grupo Legacy.</p></div></div>' +
      '<div class="guias"><div><b>Capacidad de pago</b><p>Como referencia, la cuota no debería pasar del 30 % del ingreso familiar.</p></div><div><b>Historial crediticio</b><p>El banco revisa tu historial en la APC; tenerlo al día mejora la aprobación.</p></div><div><b>Abono inicial</b><p>Un abono mayor baja la cuota y el monto a financiar.</p></div><div><b>Gastos adicionales</b><p>Considera gastos de cierre, avalúo, seguros y trámites de registro.</p></div></div>';
  }
  function initCalc(c) {
    var f = function (n) { return $('[name="' + n + '"]', c); }, out = function (k) { return $('[data-out="' + k + '"]', c); };
    function calcular() {
      var precio = Number(f('precio').value) || 0, abono = Number(f('abono').value) || 0, anos = Number(f('anos').value);
      var r = letra(precio, abono, anos, P.tasa), nom = M[f('modelo').value].nombre;
      out('abono-pct').textContent = precio ? Math.round(abono / precio * 100) + ' %' : '';
      out('cuota').textContent = usd(r.cuota);
      out('modelo').textContent = 'Modelo ' + nom; out('precio').textContent = usd(precio); out('abono').textContent = usd(abono);
      out('monto').textContent = usd(r.monto); out('plazo').textContent = anos + ' años'; out('ingreso').textContent = usd(r.cuota / 0.3);
      $('[data-calc-wa]', c).href = wa('Hola, calculé mi cuota en la web: modelo ' + nom + ', precio ' + usd(precio) + ', abono ' + usd(abono) + ', ' + anos + ' años. Me sale ' + usd(r.cuota) + ' al mes. Quiero conocer mis opciones.');
    }
    f('modelo').addEventListener('change', function () { var m = M[f('modelo').value]; f('precio').value = m.precio; f('abono').value = Math.round(m.precio * P.abonoPct / 100); calcular(); });
    ['precio', 'abono', 'anos'].forEach(function (n) { f(n).addEventListener('input', calcular); });
    calcular();
  }
  $$('[data-calc-host]').forEach(function (h) { h.innerHTML = calcHTML(h.getAttribute('data-calc-host') || 'cedro'); initCalc($('[data-calc]', h)); });

  /* ---------- página de cada modelo ---------- */
  var pm = $('[data-pagina-modelo]');
  if (pm) {
    var id = pm.getAttribute('data-pagina-modelo'), m = M[id];
    var img = function (n) { return B + 'img/' + n; };
    pm.innerHTML =
      '<section class="cab-int"><div class="cont"><p class="migas"><a href="' + B + './">Inicio</a> › <a href="' + B + 'modelos/">Modelos</a> › ' + m.nombre + '</p><p class="ceja">' + m.tipo + '</p><h1 style="margin-top:12px">Modelo <em>' + m.nombre + '</em></h1><p class="lead">' + m.lema + '</p></div></section>' +
      '<section class="sec" style="padding-top:44px"><div class="cont fm">' +
      '<div class="fm-media" data-video data-auto><img src="' + B + m.img + '.webp" alt="Modelo ' + m.nombre + ' al atardecer" width="1200" height="1200"><video muted playsinline preload="none" data-src="' + m.video + '" aria-hidden="true"></video></div>' +
      '<div class="fm-txt"><p class="lead" style="color:var(--tinta)">' + m.resumen + '</p>' +
      '<div class="specs"><div><b>' + m.rec + '</b><span>recámaras</span></div><div><b>' + m.banos + '</b><span>baños</span></div><div><b>' + m.estac + '</b><span>estacionamiento' + (m.estac > 1 ? 's techados' : '') + '</span></div></div>' +
      '<div class="precio"><small>Desde</small><b style="font-size:1.9rem">' + usd(m.precio) + '</b><small>Cuota estimada desde ' + usd(cuotaBase(m.precio)) + ' al mes*</small></div>' +
      '<div class="acciones"><a class="btn btn--cafe" href="' + B + 'agenda/?modelo=' + id + '">Agendar visita</a><a class="btn btn--linea" href="#cuota">Calcular mi cuota</a></div>' +
      '<p class="ceja" style="margin-top:6px">Plano' + (m.planos.length > 1 ? 's' : '') + '</p><div class="planos">' +
      m.planos.map(function (p) { return '<button type="button" data-zoom="' + img(p[0]) + '.webp" aria-label="Ampliar ' + p[1].toLowerCase() + ' del modelo ' + m.nombre + '"><img src="' + img(p[0]) + '-' + p[2] + '.webp" alt="' + p[1] + ' del modelo ' + m.nombre + '" width="' + p[2] + '" height="' + p[3] + '" loading="lazy"><span>' + p[1] + ' · toca para ampliar</span></button>'; }).join('') + '</div></div></div></section>' +
      '<section class="sec sec--gris"><div class="cont"><div class="sec-head"><p class="ceja">Galería</p><h2>Así se vive el <em>' + m.nombre + '</em></h2></div><div class="galeria">' +
      m.galeria.map(function (n) { var src = n === id ? B + m.img + '-700.webp' : img(n) + '-800.webp', big = n === id ? B + m.img + '.webp' : img(n) + '.webp'; return '<button type="button" data-zoom="' + big + '" aria-label="Ampliar foto"><img src="' + src + '" alt="Foto del modelo ' + m.nombre + '" width="800" height="600" loading="lazy"></button>'; }).join('') + '</div>' +
      '<div class="tour" style="margin-top:22px" data-tour="' + m.tour + '"><img src="' + img(m.galeria[0]) + '-800.webp" alt="" width="800" height="450" loading="lazy"><button class="tour-btn" type="button"><i aria-hidden="true">▶</i><b>Recorrido virtual del ' + (m.plantas > 1 ? 'dúplex' : 'modelo unifamiliar') + '</b><span>Camina por la casa aquí mismo, sin salir de la página</span></button></div></div></section>' +
      '<section class="sec" id="cuota"><div class="cont"><div class="sec-head"><p class="ceja">Calcula y conoce tus oportunidades</p><h2>Conoce tu <em>cuota estimada</em></h2></div>' + calcHTML(id) + '</div></section>' +
      '<section class="sec sec--gris" style="padding:56px 0"><div class="cont banda-extra" style="background:#fff"><p><b>¿Te gustó el ' + m.nombre + '?</b> Visita la casa modelo y conócela en persona.</p><div class="acciones"><a class="btn btn--cafe" href="' + B + 'agenda/?modelo=' + id + '">Agenda tu visita</a><a class="btn btn--linea" href="' + B + 'compara/">Compara los modelos</a></div></div>' +
      '<div class="cont" style="margin-top:40px"><p class="ceja">Otros modelos</p><div class="otros" style="margin-top:16px">' +
      IDS.filter(function (o) { return o !== id; }).map(function (o) { return '<a href="' + B + 'modelos/' + o + '/"><img src="' + B + M[o].img + '-700.webp" alt="" width="700" height="700" loading="lazy"><span><b>' + M[o].nombre + '</b>' + M[o].tipo + ' · desde ' + usd(M[o].precio) + '</span></a>'; }).join('') + '</div>' +
      '<p class="nota">*Cuota con abono del ' + P.abonoPct + ' %, ' + P.plazo + ' años y tasa de referencia del ' + P.tasa + ' %. Simulación referencial.</p></div></section>';
    $$('[data-calc]', pm).forEach(initCalc);
    document.title = 'Modelo ' + m.nombre + ' · Praderas de Arraiján';
  }

  /* ---------- comparador ---------- */
  var comp = $('[data-comparar]');
  if (comp) {
    var filas = [
      ['Tipo', function (m) { return m.tipo; }],
      ['Plantas', function (m) { return m.plantas; }],
      ['Recámaras', function (m) { return m.rec; }, 'max'],
      ['Baños', function (m) { return m.banos; }, 'max'],
      ['Estacionamientos', function (m) { return m.estac + (m.estac > 1 ? ' techados' : ''); }, 'max'],
      ['Terraza posterior', function (m) { return m.terraza ? 'Sí' : '—'; }],
      ['Precio desde', function (m) { return '<b>' + usd(m.precio) + '</b>'; }, 'min-precio'],
      ['Cuota estimada*', function (m) { return usd(cuotaBase(m.precio)) + ' al mes'; }, 'min-precio'],
      ['Recorrido virtual', function (m, id) { return '<a href="' + B + 'modelos/' + id + '/#tour">Ver recorrido</a>'; }]
    ];
    var minP = Math.min.apply(null, IDS.map(function (i) { return M[i].precio; }));
    var maxRec = Math.max.apply(null, IDS.map(function (i) { return M[i].rec; }));
    var html = '<div class="comparar-wrap"><table class="comparar"><thead><tr><th scope="col"><span class="sr">Característica</span></th>' +
      IDS.map(function (id) { return '<th scope="col" data-col="' + id + '"><img src="' + B + M[id].img + '-700.webp" alt="" width="700" height="700" loading="lazy"><b>' + M[id].nombre + '</b></th>'; }).join('') + '</tr></thead><tbody>' +
      filas.map(function (f) {
        return '<tr><th scope="row">' + f[0] + '</th>' + IDS.map(function (id) {
          var m = M[id], mejor = (f[2] === 'min-precio' && m.precio === minP) || (f[2] === 'max' && f[0] === 'Recámaras' && m.rec === maxRec);
          return '<td data-col="' + id + '"' + (mejor ? ' class="mejor"' : '') + '>' + f[1](m, id) + '</td>';
        }).join('') + '</tr>';
      }).join('') +
      '<tr><th scope="row"><span class="sr">Acciones</span></th>' + IDS.map(function (id) { return '<td data-col="' + id + '"><div class="acciones"><a class="btn btn--cafe btn--chico" href="' + B + 'modelos/' + id + '/">Ver modelo</a></div></td>'; }).join('') + '</tr>' +
      '</tbody></table></div>';
    comp.innerHTML = html;
    $$('[data-mostrar]').forEach(function (b) {
      b.addEventListener('click', function () {
        var on = b.getAttribute('aria-pressed') !== 'true';
        if (!on && $$('[data-mostrar][aria-pressed="true"]').length <= 2) return; // siempre al menos dos para comparar
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
        $$('[data-col="' + b.getAttribute('data-mostrar') + '"]', comp).forEach(function (c) { c.classList.toggle('col-off', !on); });
      });
    });
  }

  /* ---------- agenda de visitas con calendario ---------- */
  var ag = $('[data-agenda]');
  if (ag) {
    var hoy = new Date(); hoy.setHours(0, 0, 0, 0);
    var mes = new Date(hoy.getFullYear(), hoy.getMonth(), 1), fechaSel = null, horaSel = null;
    var MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    // cada horario termina en punto ("a. m." / "m." / "p. m."), así el mensaje de confirmación no lleva punto extra
    var horasDe = function (d) { return d.getDay() === 6 ? ['9:00 a. m.', '10:00 a. m.', '11:00 a. m.', '12:00 m.'] : ['9:00 a. m.', '10:00 a. m.', '11:00 a. m.', '12:00 m.', '1:00 p. m.', '2:00 p. m.', '3:00 p. m.', '4:00 p. m.']; };
    // feriados nacionales de Panamá (mes-día); en la web final los administra el equipo desde el panel
    var FERIADOS = ['01-01', '01-09', '11-03', '11-05', '11-10', '11-28', '12-08', '12-20', '12-25'];
    var md = function (d) { return String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
    var abierto = function (d) { return d >= hoy && d.getDay() !== 0 && FERIADOS.indexOf(md(d)) < 0; };
    var txtFecha = function (d) { return DIAS[d.getDay()] + ' ' + d.getDate() + ' de ' + MESES[d.getMonth()]; };
    function pintarCal() {
      $('[data-mes]', ag).textContent = MESES[mes.getMonth()].replace(/^./, function (c) { return c.toUpperCase(); }) + ' ' + mes.getFullYear();
      var g = $('[data-cal]', ag), h = '<span>Do</span><span>Lu</span><span>Ma</span><span>Mi</span><span>Ju</span><span>Vi</span><span>Sá</span>';
      for (var i = 0; i < mes.getDay(); i++) h += '<span></span>';
      var dias = new Date(mes.getFullYear(), mes.getMonth() + 1, 0).getDate();
      for (var d = 1; d <= dias; d++) {
        var f = new Date(mes.getFullYear(), mes.getMonth(), d), sel = fechaSel && f.getTime() === fechaSel.getTime();
        h += '<button type="button" data-dia="' + d + '"' + (abierto(f) ? '' : ' disabled') + ' aria-pressed="' + (sel ? 'true' : 'false') + '" aria-label="' + txtFecha(f) + '">' + d + '</button>';
      }
      g.innerHTML = h;
      $('[data-mes-ant]', ag).disabled = mes.getFullYear() === hoy.getFullYear() && mes.getMonth() === hoy.getMonth();
    }
    function pintarHoras() {
      var c = $('[data-horas]', ag);
      if (!fechaSel) { c.innerHTML = '<p class="sel-fecha">Primero elige un día.</p>'; return; }
      $('[data-fecha-txt]', ag).innerHTML = 'Para el <b>' + txtFecha(fechaSel) + '</b>';
      c.innerHTML = horasDe(fechaSel).map(function (h) { return '<button type="button" data-hora="' + h + '" aria-pressed="' + (h === horaSel ? 'true' : 'false') + '">' + h + '</button>'; }).join('');
    }
    ag.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t) return;
      if (t.hasAttribute('data-dia')) { fechaSel = new Date(mes.getFullYear(), mes.getMonth(), Number(t.getAttribute('data-dia'))); horaSel = null; pintarCal(); pintarHoras(); }
      else if (t.hasAttribute('data-hora')) { horaSel = t.getAttribute('data-hora'); pintarHoras(); }
      else if (t.hasAttribute('data-mes-sig')) { mes = new Date(mes.getFullYear(), mes.getMonth() + 1, 1); pintarCal(); }
      else if (t.hasAttribute('data-mes-ant')) { mes = new Date(mes.getFullYear(), mes.getMonth() - 1, 1); pintarCal(); }
    });
    // primer día disponible preseleccionado para que la agenda no arranque vacía
    var p = new Date(hoy); p.setDate(p.getDate() + 1); while (!abierto(p)) p.setDate(p.getDate() + 1);
    fechaSel = p; mes = new Date(p.getFullYear(), p.getMonth(), 1); pintarCal(); pintarHoras();
    var q = new URLSearchParams(location.search).get('modelo'), sm = $('[name="modelo"]', ag);
    if (q && M[q] && sm) sm.value = q;
    var fa = $('form', ag);
    fa.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = $('[data-error]', fa), falta = !fa.nombre.value.trim() ? fa.nombre : (!fa.telefono.value.trim() ? fa.telefono : (!horaSel ? null : ''));
      if (!horaSel) { err.textContent = 'Elige un horario para tu visita.'; err.hidden = false; return; }
      if (falta) { err.textContent = 'Escribe tu nombre y tu teléfono para confirmar la visita.'; err.hidden = false; falta.focus(); return; }
      err.hidden = true;
      var nom = fa.nombre.value.trim(), mod = sm && M[sm.value] ? M[sm.value].nombre : '';
      var ok = $('[data-ok]', ag);
      $('[data-ok-txt]', ok).textContent = 'Listo, ' + nom.split(' ')[0] + '. Tu visita a la casa modelo' + (mod ? ' ' + mod : '') + ' quedó para el ' + txtFecha(fechaSel) + ' a las ' + horaSel + ' Te escribimos por WhatsApp para confirmarla.';
      $('[data-ok-wa]', ok).href = wa('Hola, soy ' + nom + '. Agendé una visita a la casa modelo' + (mod ? ' ' + mod : '') + ' para el ' + txtFecha(fechaSel) + ' a las ' + horaSel + '.');
      var ini = new Date(fechaSel), hh = parseInt(horaSel, 10); ini.setHours(hh < 7 ? hh + 12 : hh, 0, 0, 0);
      var fin = new Date(ini.getTime() + 3600000), z = function (d) { return d.toISOString().replace(/[-:]/g, '').replace(/\.\d+/, ''); };
      var ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Praderas de Arraijan//Vista previa//ES', 'BEGIN:VEVENT', 'UID:' + Date.now() + '@praderasdearraijan.com', 'DTSTAMP:' + z(new Date()), 'DTSTART:' + z(ini), 'DTEND:' + z(fin), 'SUMMARY:Visita a la casa modelo · Praderas de Arraiján', 'LOCATION:Praderas de Arraiján\\, Ciudad Futuro\\, Arraiján', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
      $('[data-ok-ics]', ok).href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
      fa.hidden = true; ok.hidden = false; ok.querySelector('h3').focus();
    });
  }

  /* ---------- landing de Google Ads: precalificación en 3 pasos y origen de campaña ---------- */
  var lp = $('[data-landing]');
  if (lp) {
    var fl = $('form', lp), pasosLp = $$('.lp-paso', lp), barrasLp = $$('.lp-barra i', lp), iLp = 0, sel = {};
    var q = new URLSearchParams(location.search);
    var origen = q.get('utm_source') ? [q.get('utm_source'), q.get('utm_medium'), q.get('utm_campaign')].filter(Boolean).join(' / ') : 'Visita directa';
    function irLp(n) {
      iLp = n;
      pasosLp.forEach(function (p, k) { p.classList.toggle('activo', k === n); });
      barrasLp.forEach(function (b, k) { b.classList.toggle('hecho', k <= n); });
    }
    lp.addEventListener('click', function (e) {
      var b = e.target.closest('[data-campo]');
      if (b) {
        var c = b.getAttribute('data-campo');
        $$('[data-campo="' + c + '"]', lp).forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true'); sel[c] = b.getAttribute('data-valor');
        if (c === 'modelo') irLp(1);
        return;
      }
      if (e.target.closest('[data-sig]')) irLp(Math.min(iLp + 1, pasosLp.length - 1));
      if (e.target.closest('[data-ant]')) irLp(Math.max(iLp - 1, 0));
    });
    fl.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = $('[data-error]', fl);
      if (!fl.nombre.value.trim() || !fl.telefono.value.trim()) { err.textContent = 'Escribe tu nombre y tu WhatsApp para que un asesor te contacte.'; err.hidden = false; (fl.nombre.value.trim() ? fl.telefono : fl.nombre).focus(); return; }
      if (!fl.privacidad.checked) { err.textContent = 'Acepta la política de privacidad para enviar tus datos.'; err.hidden = false; return; }
      var ok = $('[data-ok]', lp), filas = [
        ['Nombre', fl.nombre.value.trim()], ['WhatsApp', fl.telefono.value.trim()], ['Modelo', sel.modelo || 'Sin elegir'],
        ['Ingreso familiar', fl.ingreso.value], ['Piensa comprar', sel.plazo || 'Sin respuesta'],
        ['Origen', origen], ['Búsqueda', q.get('utm_term') || '—'], ['Clic de Google (gclid)', q.get('gclid') ? 'registrado' : '—'],
        ['Vendedor', 'Asignación automática']
      ];
      $('[data-zoho]', ok).innerHTML = filas.map(function (f) { return '<dt>' + f[0] + '</dt><dd>' + f[1].replace(/</g, '&lt;') + '</dd>'; }).join('');
      $('[data-ok-nombre]', ok).textContent = fl.nombre.value.trim().split(' ')[0];
      fl.hidden = true; ok.hidden = false; $('h2', ok).focus();
    });
  }

  /* ---------- formulario de contacto ---------- */
  $$('[data-contacto]').forEach(function (f) {
    var q = new URLSearchParams(location.search).get('motivo');
    if (q && f.motivo) f.motivo.value = q;
    $$('[data-motivo]').forEach(function (b) { b.addEventListener('click', function () { f.motivo.value = b.getAttribute('data-motivo'); }); });
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = $('[data-error]', f);
      var falta = ['nombre', 'telefono', 'correo'].filter(function (n) { return !f[n].value.trim(); })[0];
      if (falta) { err.textContent = 'Completa tu nombre, teléfono y correo para que podamos contactarte.'; err.hidden = false; f[falta].focus(); return; }
      if (!f.privacidad.checked) { err.textContent = 'Acepta la política de privacidad para enviar tu solicitud.'; err.hidden = false; f.privacidad.focus(); return; }
      err.hidden = true;
      var ok = $('[data-ok]', f.parentNode);
      $('[data-ok-txt]', ok).textContent = 'Gracias, ' + f.nombre.value.trim().split(' ')[0] + '. Recibimos tu solicitud (' + f.motivo.value.toLowerCase() + ') y un asesor te contactará pronto.';
      f.hidden = true; ok.classList.add('ver');
    });
  });

  /* ---------- videos de los renders ---------- */
  $$('[data-video]').forEach(function (cont) {
    var v = $('video', cont); if (!v || reducir) return;
    var cargar = function () { if (!v.src) { v.src = B + v.getAttribute('data-src'); v.load(); } };
    var play = function () { cargar(); var p = v.play(); if (p && p.then) p.then(function () { cont.classList.add('vivo'); }).catch(function () {}); };
    if (window.matchMedia('(hover: hover)').matches && !cont.hasAttribute('data-auto')) {
      cont.parentNode.addEventListener('mouseenter', play);
      cont.parentNode.addEventListener('mouseleave', function () { v.pause(); });
    } else if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) play(); else v.pause(); }); }, { threshold: 0.5 }).observe(cont);
    }
  });
  var hv = $('.heroe video'); if (hv && reducir) { hv.removeAttribute('autoplay'); hv.pause(); }

  /* ---------- recorridos, videos de YouTube y mapa: se cargan al pedirlos ---------- */
  $$('[data-tour]').forEach(function (t) {
    if (!t.id) t.id = 'tour';
    $('.tour-btn', t).addEventListener('click', function () {
      var f = document.createElement('iframe'); f.src = t.getAttribute('data-tour'); f.title = 'Recorrido virtual'; f.allow = 'fullscreen; xr-spatial-tracking'; f.allowFullscreen = true;
      t.innerHTML = ''; t.appendChild(f);
    });
  });
  $$('[data-yt]').forEach(function (b) {
    b.addEventListener('click', function () {
      var f = document.createElement('iframe'); f.src = 'https://www.youtube-nocookie.com/embed/' + b.getAttribute('data-yt') + '?autoplay=1'; f.title = b.getAttribute('aria-label'); f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
      b.innerHTML = ''; b.appendChild(f);
    });
  });
  $$('[data-mapa-real]').forEach(function (b) {
    b.addEventListener('click', function () {
      var c = b.parentNode, f = document.createElement('iframe');
      f.src = 'https://maps.google.com/maps?q=' + encodeURIComponent('Praderas de Arraiján, Arraiján, Panamá') + '&z=13&output=embed'; f.title = 'Mapa de Praderas de Arraiján'; f.loading = 'lazy';
      c.innerHTML = ''; c.appendChild(f);
    });
  });

  /* ---------- visor de planos y fotos ---------- */
  var visor = $('.visor');
  if (visor) {
    var vimg = null, cerrarV = $('button', visor), ultimo = null;
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-zoom]'); if (!b) return;
      if (!vimg) { vimg = document.createElement('img'); visor.insertBefore(vimg, cerrarV); }
      ultimo = b; vimg.src = b.getAttribute('data-zoom'); vimg.alt = b.getAttribute('aria-label') || '';
      visor.classList.add('abierto'); cerrarV.focus();
    });
    var cerrarVisor = function () { visor.classList.remove('abierto'); if (ultimo) ultimo.focus(); };
    cerrarV.addEventListener('click', cerrarVisor);
    visor.addEventListener('click', function (e) { if (e.target === visor) cerrarVisor(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && visor.classList.contains('abierto')) cerrarVisor(); });
  }

  /* ---------- mapa de lotes (extra) ---------- */
  var disp = P.lotes.filter(function (l) { return l.estado === 'disponible'; });
  var cuenta = { disponibles: disp.length, total: P.lotes.length };
  ['reservado', 'vendido'].forEach(function (e) { cuenta[e + 's'] = P.lotes.filter(function (l) { return l.estado === e; }).length; });
  $$('[data-cuenta]').forEach(function (el) { el.textContent = cuenta[el.getAttribute('data-cuenta')]; });

  var NS = 'http://www.w3.org/2000/svg';
  function el(tag, at, padre) { var e = document.createElementNS(NS, tag); for (var k in at) e.setAttribute(k, at[k]); if (padre) padre.appendChild(e); return e; }
  function texto(t, at, padre) { var e = el('text', at, padre); e.textContent = t; return e; }
  function fondo(svg) {
    el('rect', { x: 0, y: 0, width: 1000, height: 620, fill: '#e8efe4' }, svg);
    var via = 'M-10 585 C 260 560 560 600 840 556 C 930 540 962 470 948 360 C 936 260 900 150 1010 70';
    el('path', { d: via, fill: 'none', stroke: '#d6d0c6', 'stroke-width': 26, 'stroke-linecap': 'round' }, svg);
    el('path', { d: via, fill: 'none', stroke: '#fff', 'stroke-width': 1.5, 'stroke-dasharray': '10 10' }, svg);
    el('path', { d: 'M842 552 L 790 512', stroke: '#d6d0c6', 'stroke-width': 18, 'stroke-linecap': 'round' }, svg);
    el('circle', { cx: 858, cy: 560, r: 30, fill: 'none', stroke: '#d6d0c6', 'stroke-width': 16 }, svg);
    el('circle', { cx: 858, cy: 560, r: 18, fill: '#c7dcc0' }, svg);
    texto('VÍA PRINCIPAL', { x: 360, y: 604, class: 'etq-svg' }, svg);
    var s = 7; function r() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
    for (var i = 0; i < 230; i++) {
      var x = r() * 1000, y = r() * 620;
      if ((x > 140 && x < 800 && y > 86 && y < 522) || (x > 798 && x < 945 && y > 96 && y < 470) || (y > 540 && y < 610)) continue;
      el('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: (5 + r() * 8).toFixed(1), fill: ['#9cc28a', '#7fb06f', '#b9d39d', '#f3a35a'][r() < .08 ? 3 : Math.floor(r() * 3)] }, svg);
    }
    el('rect', { x: 140, y: 86, width: 660, height: 436, rx: 22, fill: '#f6f3ee', stroke: '#9fb59a', 'stroke-width': 2, 'stroke-dasharray': '2 5' }, svg);
    [112, 196, 280, 364, 448].forEach(function (y) { el('rect', { x: 162, y: y - 5, width: 296, height: 64, rx: 8, fill: '#e1ead9' }, svg); el('rect', { x: 480, y: y - 5, width: 296, height: 64, rx: 8, fill: '#e1ead9' }, svg); });
    texto('ETAPA 1', { x: 168, y: 101, class: 'etq-svg' }, svg); texto('ETAPA 2', { x: 486, y: 101, class: 'etq-svg' }, svg); texto('ETAPA 3 · PREVENTA', { x: 486, y: 353, class: 'etq-svg' }, svg);
    var g = el('g', {}, svg);
    el('rect', { x: 812, y: 108, width: 118, height: 74, rx: 6, fill: '#5fae6a', stroke: '#fff', 'stroke-width': 2 }, g);
    el('line', { x1: 871, y1: 110, x2: 871, y2: 180, stroke: '#fff', 'stroke-width': 1.5 }, g);
    texto('CANCHA', { x: 846, y: 198, class: 'etq-svg' }, g);
    el('circle', { cx: 846, cy: 240, r: 24, fill: '#f6c36a', stroke: '#fff', 'stroke-width': 2 }, g); texto('PARQUE', { x: 822, y: 282, class: 'etq-svg' }, g);
    el('path', { d: 'M886 222 c 30 -10 44 20 30 38 c -12 16 -40 4 -30 22 c 8 14 34 6 30 22 c -6 18 -44 12 -40 -8 c 4 -18 -16 -22 -14 -40 c 2 -18 12 -30 24 -34 z', fill: '#6d6762', stroke: '#fff', 'stroke-width': 2 }, g);
    texto('PUMPTRACK', { x: 872, y: 330, class: 'etq-svg' }, g);
    el('rect', { x: 812, y: 350, width: 72, height: 44, rx: 10, fill: '#8cc47c', stroke: '#fff', 'stroke-width': 2 }, g); texto('MINI GOLF', { x: 812, y: 410, class: 'etq-svg' }, g);
    el('circle', { cx: 912, cy: 430, r: 15, fill: '#9cc6e0', stroke: '#fff', 'stroke-width': 2 }, g); texto('TANQUE DE AGUA', { x: 852, y: 462, class: 'etq-svg' }, g);
    texto('ACCESO', { x: 770, y: 540, class: 'etq-svg' }, g);
    texto('PLANO ILUSTRATIVO · DISPONIBILIDAD DE EJEMPLO', { x: 980, y: 24, class: 'etq-svg', 'font-size': 8, 'text-anchor': 'end' }, svg);
  }
  function ficha(f, l) {
    var m = M[l.modelo], r = letra(l.precio, l.precio * P.abonoPct / 100, P.plazo, P.tasa);
    f.innerHTML = '<div class="ficha-cab"><div><p>Etapa ' + l.etapa + (l.etapa === 3 ? ' · preventa' : '') + '</p><h3>Lote ' + l.id + '</h3></div><span class="sello ' + l.estado + '">' + (l.estado === 'disponible' ? 'Disponible' : 'Reservado') + '</span></div>' +
      '<img class="ficha-img" src="' + B + m.img + '-700.webp" alt="Modelo ' + m.nombre + '" width="700" height="700">' +
      '<div class="ficha-cuerpo"><dl><dt>Modelo</dt><dd>' + m.nombre + '</dd><dt>Tipo</dt><dd>' + m.tipo + '</dd><dt>Recámaras · baños</dt><dd>' + m.rec + ' · ' + m.banos + '</dd><dt>Ubicación</dt><dd>' + (l.esquina ? 'Esquina' : 'Medianero') + '</dd><dt>Precio</dt><dd>' + usd(l.precio) + (l.esquina ? ' <span class="marca-ej">ejemplo</span>' : '') + '</dd></dl>' +
      '<div class="ficha-letra"><span>Cuota estimada<br>abono ' + P.abonoPct + ' % · ' + P.plazo + ' años</span><b>' + usd(r.cuota) + '</b></div>' +
      (l.estado === 'disponible' ? '<a class="btn btn--cafe" href="' + B + 'agenda/?modelo=' + l.modelo + '">Agendar visita para este lote</a>' : '<a class="btn btn--linea" href="' + wa('Hola, vi que el lote ' + l.id + ' está reservado. ¿Me avisan si se libera?') + '" target="_blank" rel="noopener">Avisarme si se libera</a>') +
      '<a class="btn btn--linea" href="' + B + 'modelos/' + l.modelo + '/">Ver el modelo ' + m.nombre + '</a></div>';
  }
  $$('[data-plano]').forEach(function (wrap) {
    var svg = $('svg', wrap), tip = $('.plano-tip', wrap), host = wrap.closest('[data-mapa]') || document, fi = $('[data-ficha]', host);
    fondo(svg);
    var capa = el('g', {}, svg), nodos = {}, porId = {};
    P.lotes.forEach(function (l) {
      porId[l.id] = l;
      var r = el('rect', { x: l.x, y: l.y, width: l.w, height: l.h, rx: 2.5, class: 'lote ' + l.estado, 'data-id': l.id }, capa);
      if (l.estado !== 'vendido') { r.setAttribute('tabindex', '0'); r.setAttribute('role', 'button'); r.setAttribute('aria-label', 'Lote ' + l.id + ', modelo ' + M[l.modelo].nombre + ', ' + l.estado); }
      nodos[l.id] = r;
    });
    capa.addEventListener('mouseover', function (e) {
      var id = e.target.getAttribute('data-id'); if (!id || !tip) return;
      var c = wrap.getBoundingClientRect(), rr = nodos[id].getBoundingClientRect(), l = porId[id];
      tip.innerHTML = '<b>Lote ' + l.id + '</b> · ' + M[l.modelo].nombre + ' · ' + l.estado;
      tip.style.left = (rr.left + rr.width / 2 - c.left) + 'px'; tip.style.top = (rr.top - c.top) + 'px'; tip.classList.add('ver');
    });
    capa.addEventListener('mouseout', function () { if (tip) tip.classList.remove('ver'); });
    var sel = null;
    function elegir(id) { var l = porId[id]; if (!l || l.estado === 'vendido') return; if (sel) nodos[sel].classList.remove('sel'); sel = id; nodos[id].classList.add('sel'); if (fi) ficha(fi, l); }
    capa.addEventListener('click', function (e) { var id = e.target.getAttribute('data-id'); if (id) elegir(id); });
    capa.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { var id = e.target.getAttribute('data-id'); if (id) { e.preventDefault(); elegir(id); } } });
    var lista = $('[data-lista-lotes]', host);
    function pintarLista(f) {
      if (!lista) return; lista.innerHTML = '';
      disp.filter(function (l) { return !f || f === 'todos' || f === 'disponibles' || l.modelo === f; }).slice(0, 24).forEach(function (l) {
        var b = document.createElement('button'); b.type = 'button';
        b.innerHTML = '<b>Lote ' + l.id + '</b><span>' + M[l.modelo].nombre + ' · ' + usd(l.precio) + '</span>';
        b.addEventListener('click', function () { elegir(l.id); nodos[l.id].scrollIntoView({ block: 'nearest', inline: 'center' }); });
        lista.appendChild(b);
      });
    }
    $$('[data-filtro]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        $$('[data-filtro]', host).forEach(function (o) { o.setAttribute('aria-pressed', 'false'); }); b.setAttribute('aria-pressed', 'true');
        var f = b.getAttribute('data-filtro');
        P.lotes.forEach(function (l) { nodos[l.id].classList.toggle('oculto', !(f === 'todos' || (f === 'disponibles' ? l.estado === 'disponible' : l.modelo === f))); });
        pintarLista(f);
      });
    });
    pintarLista('todos');
    var ini = disp.filter(function (l) { return l.etapa === 2 && l.modelo === 'cedro'; })[3] || disp[0];
    if (ini && wrap.hasAttribute('data-preseleccion')) elegir(ini.id);
  });

  $$('[data-ano]').forEach(function (e) { e.textContent = new Date().getFullYear(); });
})();
