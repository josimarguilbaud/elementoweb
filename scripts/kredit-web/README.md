# Generador de la web de Kredit (vista previa)

Arma las 10 páginas de `public/demo/kredit-web/` desde partes comunes, para que el
encabezado, el pie, la banda de demo y el sprite del logo sean idénticos en todas.
El HTML generado se comitea: el sitio es estático y no necesita build en producción.

```bash
node scripts/kredit-web/build.mjs            # todas las páginas
node scripts/kredit-web/build.mjs inicio     # solo una (nombre del módulo en pages/)
```

| Archivo | Qué hace |
|---|---|
| `build.mjs` | Plantilla común (head, banda, encabezado con menú móvil, pie, barra fija, WhatsApp) y ayudas: `photo()`, `pageHero()`, `paylineList()`, `ctaFinal()`, `acctMock()`, `legalBody()`, `faqBlock()`. |
| `pages/*.mjs` | Una página cada uno: devuelve `title`, `description`, `body` y, si aplica, `jsonld`, `quincenas` y `sticky`. |
| `faq.mjs` | Todas las preguntas frecuentes. Las usan la página de preguntas (y su JSON-LD FAQPage), el inicio, préstamos y empresas. |
| `parts/sprite.html` | Copia del bloque `<svg class="sprite">` de la landing de préstamos (logo e íconos). |

- Estilos y comportamiento del sitio: `public/demo/kredit-web/assets/site.css` y `site.js`.
  El sistema base (`base.css`, `calc.js`, `quincenas.js`, `page.js`) se carga desde
  `public/demo/kredit-landings/assets/` y no se modifica aquí.
- Las cifras de ejemplo (cuotas de los tickets, tabla de plazos, portal) se calculan con
  `calc.js` al generar, así coinciden con la calculadora.
- Todo dato no confirmado por Kredit va en `<span class="tbd">[… por confirmar]</span>`.
- Después de generar: `node scripts/test-web-kredit.mjs` (ver el encabezado del archivo).
