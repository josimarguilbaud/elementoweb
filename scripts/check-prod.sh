#!/usr/bin/env bash
# Comprueba cabeceras y redirects del sitio publicado. Solo lectura (GET/HEAD).
#   bash scripts/check-prod.sh                       → https://elementoweb.com
#   bash scripts/check-prod.sh http://127.0.0.1      → un nginx local (omite la matriz http/www)
BASE="${1:-https://elementoweb.com}"; HOST="${BASE#*://}"; LOCAL=0
case "$HOST" in 127.*|localhost*) LOCAL=1;; esac
pass=0; fail=0
ok(){ pass=$((pass+1)); printf '  ✓ %s\n' "$1"; }
ko(){ fail=$((fail+1)); printf '  ✗ %s\n     esperado: %s\n     obtenido: %s\n' "$1" "$2" "$3"; }
code(){ curl -s -o /dev/null -m 20 -w '%{http_code}' "$@"; }
hdr(){ curl -sI -m 20 "$1" | tr -d '\r' | grep -i "^$2:" | head -1 | sed 's/^[^:]*: *//'; }
eqc(){ [ "$2" = "$3" ] && ok "$1" || ko "$1" "$2" "$3"; }
has(){ [ -n "$3" ] && echo "$3" | grep -qi "$2" && ok "$1" || ko "$1" "contiene «$2»" "${3:-(vacío)}"; }

echo "== Redirects (sin bajar a http; www → no-www en 301) =="
CANON="https://elementoweb.com"
# www se resuelve en nginx por la cabecera Host, así que se prueba también en local.
www_get(){ if [ "$LOCAL" = 1 ]; then curl -sI -m 20 -o /dev/null -H "Host: www.elementoweb.com" -w '%{http_code} %{redirect_url}' "$BASE$1"; else curl -sI -m 20 -o /dev/null -w '%{http_code} %{redirect_url}' "https://www.elementoweb.com$1"; fi; }
r=$(www_get "/"); eqc "www → no-www (301)" "301 $CANON/" "$r"
r=$(www_get "/precios/?utm_source=a&b=2"); eqc "www → no-www conserva ruta y consulta" "301 $CANON/precios/?utm_source=a&b=2" "$r"
if [ "$LOCAL" = 0 ]; then
  # El salto http → https lo hace Traefik/Coolify con 307 (temporal); HSTS cubre a los navegadores.
  r=$(curl -sI -m 20 -o /dev/null -w '%{http_code} %{redirect_url}' "http://$HOST/")
  case "$r" in "301 https://$HOST/"|"307 https://$HOST/"|"308 https://$HOST/") ok "http → https ($r)";; *) ko "http → https (301/307/308)" "https://$HOST/" "$r";; esac
  r=$(curl -sIL -m 30 -o /dev/null -w '%{url_effective} %{num_redirects}' "http://www.$HOST/servicios")
  eqc "http://www/servicios termina en $CANON/servicios/ (≤ 4 saltos)" "$CANON/servicios/ ok" "${r% *} $([ "${r##* }" -le 4 ] 2>/dev/null && echo ok || echo "${r##* } saltos")"
fi
loc=$(hdr "$BASE/servicios" location); c=$(code "$BASE/servicios")
eqc "/servicios responde 301" 301 "$c"
case "$loc" in http://*) ko "/servicios: Location no debe ser http://" "/servicios/ (relativo) o https://…" "$loc";; /servicios/|https://*/servicios/) ok "/servicios → $loc (sin bajar a http)";; *) ko "/servicios: Location inesperado" "/servicios/" "${loc:-(vacío)}";; esac
r=$(curl -sI -m 20 -o /dev/null -w '%{http_code} %{redirect_url}' "$BASE/crecimiento/mantenimiento-hosting-web-panama"); has "301 histórico de mantenimiento" "301" "$r"
for par in "/saas/chatmantis/ /saas/wazacrm/" "/funcionalidades/chatbots-ia-web-chatmantis-panama/ /funcionalidades/chatbots-ia-web-wazacrm-panama/" "/saas/wapycrm/ /saas/nouscrm/"; do
  set -- $par
  r=$(curl -sI -m 20 -o /dev/null -w '%{http_code} %{redirect_url}' "$BASE$1"); has "301 $1 → $2" "301 " "$r"; has "$1 apunta a $2" "$2" "$r"
done

echo "== Códigos =="
for p in / /precios/ /casos-de-exito/ /guias/ /miami/ /contacto/ /robots.txt /sitemap-index.xml /llms.txt /fonts/roboto-latin-wght-normal.woff2; do eqc "200 $p" 200 "$(code "$BASE$p")"; done
eqc "404 real en página inexistente" 404 "$(code "$BASE/esta-pagina-no-existe-$$")"

echo "== Cabeceras de seguridad =="
h=$(hdr "$BASE/" x-content-type-options); eqc "X-Content-Type-Options" "nosniff" "$h"
h=$(hdr "$BASE/" referrer-policy); has "Referrer-Policy" "strict-origin" "$h"
h=$(hdr "$BASE/" x-frame-options); has "X-Frame-Options" "sameorigin" "$h"
h=$(hdr "$BASE/" permissions-policy); has "Permissions-Policy" "camera=()" "$h"
h=$(hdr "$BASE/" content-security-policy-report-only); has "CSP en solo-reporte" "default-src" "$h"
h=$(hdr "$BASE/" server); case "$h" in *[0-9].[0-9]*) ko "Server no debe mostrar versión" "nginx" "$h";; *) ok "Server sin versión ($h)";; esac
h=$(hdr "$BASE/" strict-transport-security); has "HSTS" "max-age" "$h"
case "$h" in *includeSubDomains*|*preload*) ko "HSTS sin includeSubDomains ni preload (mail, cpanel y app viven en otros servidores)" "max-age=…" "$h";; *) ok "HSTS sin includeSubDomains ni preload";; esac

echo "== Documentos de cliente =="
h=$(hdr "$BASE/propuestas/evolutionpmc-servidor-vps/" x-robots-tag); has "X-Robots-Tag noindex en /propuestas/" "noindex" "$h"

echo "== Contenido =="
html=$(curl -s -m 20 "$BASE/")
echo "$html" | grep -q 'G-J0NHHRTV75' && ok "GA4 presente en la home" || ko "GA4 presente en la home" "G-J0NHHRTV75" "no encontrado"
echo "$html" | grep -q 'fonts.googleapis.com' && ko "sin Google Fonts" "0 referencias" "hay referencias" || ok "sin Google Fonts"
echo "$html" | grep -q '<link rel="canonical" href="https://elementoweb.com/"' && ok "canonical de la home" || ko "canonical de la home" "https://elementoweb.com/" "distinto"
echo "$html" | grep -qi 'Agencia de diseño web en Panamá\. Páginas corporativas' && ok "meta descripción nueva" || ko "meta descripción nueva" "Agencia de diseño web en Panamá…" "distinta"
h=$(hdr "$BASE/robots.txt" content-type); has "robots.txt es texto" "text/plain" "$h"

# Sondas del webhook de contacto (D41). Sin efecto: el honeypot se descarta y un lead inválido no guarda nada,
# así que no dejan ficha ni correo. Se piden a propósito (--webhook) porque llaman a n8n en Hetzner.
#   bash scripts/check-prod.sh https://elementoweb.com --webhook      honeypot: 200 {"ok": true}
#   bash scripts/check-prod.sh https://elementoweb.com --webhook-v2   además, un inválido responde 422 (contrato v2 activo)
if [ "${2:-}" = "--webhook" ] || [ "${2:-}" = "--webhook-v2" ]; then
  echo "== Webhook de contacto (sondas sin efecto) =="
  EP="https://n8n.aiwebstudio.co/webhook/elementoweb-contacto"
  post(){ curl -s -m 25 -o /tmp/sonda.$$ -w '%{http_code}' -X POST "$EP" -H 'Content-Type: application/json' -H 'Origin: https://elementoweb.com' --data "$1"; }
  c=$(post '{"nombre":"sonda","telefono":"61234567","botcheck":"x","intento":"sonda-honeypot-0001"}'); eqc "honeypot responde 200" 200 "$c"
  grep -q '"ok": *true' /tmp/sonda.$$ && ok "honeypot responde {\"ok\": true}" || ko "honeypot responde {\"ok\": true}" '{"ok": true}' "$(cat /tmp/sonda.$$)"
  if [ "${2:-}" = "--webhook-v2" ]; then
    c=$(post '{"nombre":"","telefono":"","intento":"sonda-invalido-0001"}'); eqc "un lead inválido responde 422 (contrato v2)" 422 "$c"
    grep -q '"ok": *false' /tmp/sonda.$$ && ok "el inválido responde {\"ok\": false}" || ko "el inválido responde {\"ok\": false}" '{"ok": false}' "$(cat /tmp/sonda.$$)"
  fi
  rm -f /tmp/sonda.$$
fi

printf '\n%s ok · %s fallos\n' "$pass" "$fail"; [ "$fail" = 0 ]
