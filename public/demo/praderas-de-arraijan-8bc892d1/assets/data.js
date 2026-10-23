/* Datos del demo de Praderas de Arraiján.
   Reales (de praderasdearraijan.com, 23-oct-2026): modelos, recámaras, baños,
   estacionamientos, precio desde $88,997, amenidades, contactos y recorridos 3D.
   De ejemplo: precios de Cedro y Almendro, lotes, etapas y su disponibilidad. */

window.PRADERAS = {
  whatsapp: '50760306736',
  modelos: {
    roble: {
      nombre: 'Roble',
      tipo: 'Unifamiliar · una planta',
      rec: 2, banos: '2', estac: 1, plantas: 1,
      precio: 88997, ejemplo: false,
      img: 'img/roble', video: 'video/roble.mp4',
      resumen: 'La primera casa de una pareja o de una familia que empieza: dos recámaras, dos baños completos y patio propio.',
      tour: 'https://inmerso3d.online/3d-model/grupo-legacy-praderas-de-arraijan-modelo-unifamiliar/fullscreen/'
    },
    cedro: {
      nombre: 'Cedro',
      tipo: 'Unifamiliar · una planta',
      rec: 3, banos: '2', estac: 1, plantas: 1,
      precio: 97900, ejemplo: true,
      img: 'img/cedro', video: 'video/cedro.mp4',
      resumen: 'Tres recámaras en una sola planta, para que los niños tengan su cuarto y nadie suba escaleras.',
      tour: 'https://inmerso3d.online/3d-model/grupo-legacy-praderas-de-arraijan-modelo-unifamiliar/fullscreen/'
    },
    almendro: {
      nombre: 'Almendro',
      tipo: 'Dúplex · dos plantas',
      rec: 3, banos: '2.5', estac: 2, plantas: 2,
      precio: 119900, ejemplo: true,
      img: 'img/almendro', video: 'video/almendro.mp4',
      resumen: 'Dos plantas, tres recámaras arriba, terraza posterior y estacionamiento techado para dos autos.',
      tour: 'https://inmerso3d.online/3d-model/grupo-legacy-praderas-de-arraijan-modelo-duplex/fullscreen/'
    }
  }
};

/* Lotificación ilustrativa: manzanas en filas, como en el render aéreo. */
(function () {
  var seed = 20261023;
  function rnd() { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; }

  var etapas = {
    1: { vendido: 0.84, reservado: 0.08 },
    2: { vendido: 0.46, reservado: 0.16 },
    3: { vendido: 0.0, reservado: 0.22 }
  };
  // fila de manzanas -> modelo de cada mitad (izquierda, derecha)
  var filas = [
    { y: 112, modelos: ['almendro', 'almendro'] },
    { y: 196, modelos: ['cedro', 'roble'] },
    { y: 280, modelos: ['roble', 'cedro'] },
    { y: 364, modelos: ['cedro', 'almendro'] },
    { y: 448, modelos: ['roble', 'roble'] }
  ];
  var manzanas = [{ x0: 168, x1: 452 }, { x0: 486, x1: 770 }];
  var LOTE = 22, FONDO = 27;
  var lotes = [], cont = { 1: 0, 2: 0, 3: 0 };

  filas.forEach(function (fila, fi) {
    manzanas.forEach(function (m, mi) {
      var etapa = mi === 0 ? 1 : (fi < 3 ? 2 : 3);
      var modelo = fila.modelos[mi];
      var n = Math.floor((m.x1 - m.x0) / LOTE);
      for (var lado = 0; lado < 2; lado++) {
        for (var i = 0; i < n; i++) {
          var r = rnd(), p = etapas[etapa], estado = 'disponible';
          if (r < p.vendido) estado = 'vendido';
          else if (r < p.vendido + p.reservado) estado = 'reservado';
          var esquina = i === 0 || i === n - 1;
          var precio = window.PRADERAS.modelos[modelo].precio + (esquina ? 3500 : 0);
          cont[etapa]++;
          lotes.push({
            id: etapa + '-' + String(cont[etapa]).padStart(3, '0'),
            etapa: etapa, modelo: modelo, estado: estado, esquina: esquina, precio: precio,
            x: m.x0 + i * LOTE, y: fila.y + lado * FONDO, w: LOTE - 2, h: FONDO - 2
          });
        }
      }
    });
  });
  window.PRADERAS.lotes = lotes;
})();
