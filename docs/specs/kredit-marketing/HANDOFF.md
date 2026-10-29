# Traspaso — Kredit (cobranza + marketing + web) · estado al 12-oct-2026 (sesión local)

Repo `josimarguilbaud/elementoweb`. **Un push a `main` publica en producción** (ver `CLAUDE.md`).
Esta sesión trabajó en el worktree `.claude/worktrees/kredit-casa` (rama `kredit-diseno-casa`, base
`origin/main`) porque el `main` local de Josimar tiene un rediseño del home sin commitear que choca
con `origin/main` (no se tocó).

## 1. Cliente

- **Kredit** · CREDU HOLDINGS, S.A. · RUC 155770767-2-2025 DV9 · WhatsApp +507 6997-5664 ·
  ventas@kredit.com.pa · protecciondedatos@kredit.com.pa.
- **Licencia confirmada:** empresa financiera autorizada por el MICI (Dirección General de Empresas
  Financieras), Resolución No. 638 del 23-sep-2025 (consta en su política de privacidad).
- **Montos (dato de Josimar, 12-oct):** de B/. 50 a B/. 3,000. **Plazos:** no confirmados; las
  calculadoras usan 4, 6, 9, 12, 18 y 24 meses como ejemplo (todo > 90 días, anunciable en Google y Meta).
- Dos direcciones distintas publicadas: pie de su web (Torre de las Américas, Torre B, Of. 602-B,
  Punta Pacífica) y política de privacidad (Calle 1ra La Cresta, P.H. El Alcázar, Bella Vista). Confirmar.
- Revisión de su web e Instagram del 12-oct: `revision-web-instagram-2026-10-12.md`.

## 2. Entregables

| Qué | URL | Fuente |
|---|---|---|
| Propuesta cobranza con IA (EW-KRE-2026-01) | **Fuera de línea desde el 29-oct-2026** (antes /propuestas/kredit-cobranza-ia-19bfe5dc/) | `scripts/propuestas-kredit/gen_kredit.py` |
| Propuesta marketing digital (EW-KRE-2026-02) | **Fuera de línea desde el 29-oct-2026** (antes /propuestas/kredit-marketing-digital-4a6a12dc/) | `scripts/propuestas-kredit/gen_kredit_mkt.py` |
| Demo «Recupera» (cobranza) | elementoweb.com/demo/kredit/ | `public/demo/kredit/`, pruebas `scripts/test-demo-kredit.mjs` |
| Landing personas | elementoweb.com/demo/kredit-landings/prestamos/ | `public/demo/kredit-landings/` |
| Landing empresas (B2B) | elementoweb.com/demo/kredit-landings/empresas/ | pruebas `scripts/test-landings-kredit.mjs` |
| Web nueva multipágina (10 páginas) | elementoweb.com/demo/kredit-web/ | `public/demo/kredit-web/`, pruebas `scripts/test-web-kredit.mjs` |

- **Diseño de las propuestas:** el de la casa (Tailwind CDN, glass, header oscuro con orbes),
  plantilla compartida `scripts/propuestas-kredit/casa.py`; diagramas SVG hechos con la skill
  `diagram-design` (conectores ortogonales, 1–2 acentos, leyenda abajo).
- **Diseño de las demos de Kredit:** sistema «Comprobante claro» en `DESIGN-kredit.md` (aprobado por
  Josimar el 12-oct). Investigación de mercado: `investigacion-landings-panama.md`. Fotos con IA
  (fal · nano-banana-2, US$ 1.44) en `public/demo/kredit-web/img/` con `CREDITOS.json`;
  `portal-celular` salió defectuosa y no se usa.

**29-oct-2026: las dos propuestas se quitaron de elementoweb.com** por pedido de Josimar. Los
generadores siguen en `scripts/propuestas-kredit/`: correrlos vuelve a crear las carpetas en
`public/propuestas/`, así que no se commitean sin su visto bueno. Los demos siguen en línea.

## 3. Decisiones del 12-oct

- **La cobranza no usa WhatsApp** (Política de Mensajería de WhatsApp Business, sección 4: prohíbe
  la cobranza de deudas aunque haya licencia). Canales: SMS, correo, chat del portal y voz. Aplicado
  en la propuesta EW-KRE-2026-01 y en el demo (pruebas que fallan si reaparece «WhatsApp»).
- **El rediseño multipágina entra a la propuesta de marketing** como ítem G (reemplaza «Mejora de la
  página principal», US$ 950) a **US$ 3,000**, punto medio del mercado panameño para 8–12 páginas
  (fuentes en `precio-rediseno-web-panama.md`). Integral pasa a US$ 7,700 + US$ 2,399/mes. Esencial y
  Crecimiento no cambian.
- **Roboto en todo lo de Kredit** (pedido de Josimar): Roboto y Roboto Mono en landings, web, demo
  de cobranza y capturas de las propuestas. El tracking negativo de los titulares se redujo a la mitad
  porque Roboto es más ancha (detalle en `DESIGN-kredit.md`).
- **La landing de personas es solo para Google y redes, sin afiliados:** no pregunta por empresa
  afiliada ni ofrece recomendar a la empresa; la cuota se paga por descuento directo de planilla que
  Kredit coordina con la empresa del cliente. Las afiliadas siguen en la landing de empresas y en la
  web. La propuesta de marketing se reescribió en ese sentido.
- Las quincenas que caen en fin de semana o feriado se muestran el día hábil anterior
  (`quincenas.js`, con pruebas en `test-web-kredit.mjs`).
- **Reguladores con su alcance exacto** (pedido de Josimar): logos oficiales del MICI (licencia, Res.
  638-2025) y de la SBP (solo supervisión en prevención de blanqueo, Ley 23 de 2015) en un bloque de
  confianza de cada landing, en la portada de la web y en el pie de todas las páginas. Kredit debe
  confirmar su registro ante la SBP y autorizar el uso de los logos (`assets/reguladores/FUENTES.json`).
- Propuesta de marketing con hero de portada y bloques por servicio (Google Ads, Meta Ads, Instagram,
  landings, web), 12 fotos de fal; solo HTML, el PDF no se regeneró.
- Landings rediseñadas: hero que cabe en la primera pantalla (1440×900: termina en 820 px; 390×844:
  CTA en 821 px; antes 1,043 y 1,852), cuota quincenal como cifra principal, sello MICI arriba.

## 4. Pendientes (en orden)

1. Que Kredit confirme: plazos, tasa efectiva máxima, ejemplo representativo, comisiones, dirección
   oficial, requisitos para quien llega por Google y redes (la landing de personas ya no pide empresa
   afiliada; la web todavía dice «colaboradores de empresas afiliadas»), costo para la empresa. Todo está marcado `.tbd`.
2. Precios de la propuesta de cobranza (implementación, mensualidad, plazo mínimo, anticipo) cuando
   Kredit dé el tamaño de cartera.
3. Voz real del demo (llamada): Higgsfield con la voz Gia (`530df032-c311-483b-a750-cb3c9e1bcdfd`);
   Higgsfield tiene 0 créditos hoy.
4. Demo 2 (llamada en vivo con Retell/Vapi): diseño en `docs/specs/kredit-cobranza/demo2-agente-voz.md`.
5. Opcional: cargar las cotizaciones de Kredit en NousCRM (el MCP de NousCRM devolvió 401: token vencido).
6. El `main` local de Josimar tiene un rediseño del home sin commitear que choca con `origin/main`
   (15 commits del home): resolverlo antes de trabajar el home ahí.

## 5. Comandos

```bash
npm run build                                          # obligatorio antes de pushear a main
python scripts/propuestas-kredit/gen_kredit_mkt.py     # propuesta de marketing (HTML)
python scripts/propuestas-kredit/gen_kredit.py         # propuesta de cobranza (HTML)
node scripts/propuestas-kredit/pdf.mjs                 # PDF Carta de las dos (o: marketing | cobranza)
node scripts/test-landings-kredit.mjs
node scripts/test-demo-kredit.mjs
node scripts/test-web-kredit.mjs
```

Todos los `node` necesitan Playwright: `NODE_PATH=<carpeta con playwright>` (en Windows se instaló
`playwright@1.63` en una carpeta temporal; usa el Chromium 1243 ya descargado). En Windows correr
los `python` con `PYTHONUTF8=1` si la consola falla al imprimir acentos.
