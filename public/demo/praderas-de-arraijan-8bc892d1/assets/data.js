/* Datos del demo de Praderas de Arraiján.
   Reales: modelos, recámaras, baños, estacionamientos, amenidades y contactos (praderasdearraijan.com y la guía del
   cliente); precios de la guía del cliente ($88,997 / $97,997 / $116,997), por confirmar con su lista oficial.
   De ejemplo: lotes, etapas, disponibilidad, tasa de referencia de la calculadora y horario de visitas. */

window.PRADERAS = {
  whatsapp: '50760306736',
  tasa: 6.5,          // tasa anual de referencia; en la web final la fija Grupo Legacy
  abonoPct: 5,
  plazo: 30,
  modelos: {
    roble: {
      nombre: 'Roble', tipo: 'Unifamiliar · una planta', lema: 'Comodidad y funcionalidad para tu familia.',
      rec: 2, banos: '2', estac: 1, plantas: 1, terraza: false,
      precio: 88997,
      img: 'img/roble', video: 'video/roble.mp4',
      minis: ['mini-sala-unifamiliar', 'mini-recamara-unifamiliar', 'mini-casa-modelo-sala'],
      resumen: 'La primera casa de una pareja o de una familia que empieza: dos recámaras, dos baños completos, sala comedor integrada y patio propio.',
      galeria: ['sala-unifamiliar', 'recamara-unifamiliar', 'casa-modelo-sala', 'roble'],
      planos: [['plano-roble', 'Planta única', 800, 415]],
      tour: 'https://inmerso3d.online/3d-model/grupo-legacy-praderas-de-arraijan-modelo-unifamiliar/fullscreen/'
    },
    cedro: {
      nombre: 'Cedro', tipo: 'Unifamiliar · una planta', lema: 'Espacios bien distribuidos para una vida práctica.',
      rec: 3, banos: '2', estac: 1, plantas: 1, terraza: false,
      precio: 97997,
      img: 'img/cedro', video: 'video/cedro.mp4',
      minis: ['mini-recamara-unifamiliar', 'mini-sala-unifamiliar', 'mini-casa-modelo-sala'],
      resumen: 'Tres recámaras en una sola planta, para que cada niño tenga su cuarto y nadie suba escaleras.',
      galeria: ['sala-unifamiliar', 'recamara-unifamiliar', 'casa-modelo-sala', 'cedro'],
      planos: [['plano-cedro', 'Planta única', 800, 411]],
      tour: 'https://inmerso3d.online/3d-model/grupo-legacy-praderas-de-arraijan-modelo-unifamiliar/fullscreen/'
    },
    almendro: {
      nombre: 'Almendro', tipo: 'Dúplex · dos plantas', lema: 'Más espacio para todo lo que sueñas.',
      rec: 3, banos: '2.5', estac: 2, plantas: 2, terraza: true,
      precio: 116997,
      img: 'img/almendro', video: 'video/almendro.mp4',
      minis: ['mini-sala-duplex', 'mini-recamara-duplex', 'mini-recamara-duplex-2'],
      resumen: 'Dos plantas, tres recámaras arriba, terraza posterior, lavandería abierta y estacionamiento techado para dos autos.',
      galeria: ['sala-duplex', 'recamara-duplex', 'recamara-duplex-2', 'almendro'],
      planos: [['plano-almendro-baja', 'Planta baja', 700, 747], ['plano-almendro-alta', 'Planta alta', 700, 607]],
      tour: 'https://inmerso3d.online/3d-model/grupo-legacy-praderas-de-arraijan-modelo-duplex/fullscreen/'
    }
  }
};

/* Lotificación ilustrativa: manzanas en filas, como en el render aéreo. */
(function () {
  var seed = 20261023;
  function rnd() { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; }
  var etapas = { 1: { vendido: 0.84, reservado: 0.08 }, 2: { vendido: 0.46, reservado: 0.16 }, 3: { vendido: 0.0, reservado: 0.22 } };
  var filas = [
    { y: 112, modelos: ['almendro', 'almendro'] },
    { y: 196, modelos: ['cedro', 'roble'] },
    { y: 280, modelos: ['roble', 'cedro'] },
    { y: 364, modelos: ['cedro', 'almendro'] },
    { y: 448, modelos: ['roble', 'roble'] }
  ];
  var manzanas = [{ x0: 168, x1: 452 }, { x0: 486, x1: 770 }];
  var LOTE = 22, FONDO = 27, lotes = [], cont = { 1: 0, 2: 0, 3: 0 };
  filas.forEach(function (fila, fi) {
    manzanas.forEach(function (m, mi) {
      var etapa = mi === 0 ? 1 : (fi < 3 ? 2 : 3), modelo = fila.modelos[mi], n = Math.floor((m.x1 - m.x0) / LOTE);
      for (var lado = 0; lado < 2; lado++) {
        for (var i = 0; i < n; i++) {
          var r = rnd(), p = etapas[etapa], estado = 'disponible';
          if (r < p.vendido) estado = 'vendido';
          else if (r < p.vendido + p.reservado) estado = 'reservado';
          var esquina = i === 0 || i === n - 1;
          cont[etapa]++;
          lotes.push({
            id: etapa + '-' + String(cont[etapa]).padStart(3, '0'), etapa: etapa, modelo: modelo, estado: estado, esquina: esquina,
            precio: window.PRADERAS.modelos[modelo].precio + (esquina ? 3500 : 0),
            x: m.x0 + i * LOTE, y: fila.y + lado * FONDO, w: LOTE - 2, h: FONDO - 2
          });
        }
      }
    });
  });
  window.PRADERAS.lotes = lotes;
})();
