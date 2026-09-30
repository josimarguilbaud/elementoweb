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

echo "== Redirects (un solo salto, 301, sin bajar a http) =="
if [ "$LOCAL" = 0 ]; then
  r=$(curl -sI -m 20 -o /dev/null -w '%{http_code} %{redirect_url}' "http://$HOST/"); eqc "http → https (301)" "301 https://$HOST/" "$r"
  r=$(curl -sI -m 20 -o /dev/null -w '%{http_code} %{redirect_url}' "https://www.$HOST/"); eqc "www → no-www (301)" "301 https://$HOST/" "$r"
  r=$(curl -sI -m 20 -o /dev/null -w '%{http_code} %{redirect_url}' "http://www.$HOST/servicios"); has "http://www/servicios termina en https no-www (primer salto)" "https://$HOST" "$r"
fi
loc=$(hdr "$BASE/servicios" location); c=$(code "$BASE/servicios")
eqc "/servicios responde 301" 301 "$c"
case "$loc" in http://*) ko "/servicios: Location no debe ser http://" "/servicios/ (relativo) o https://…" "$loc";; /servicios/|https://*/servicios/) ok "/servicios → $loc (sin bajar a http)";; *) ko "/servicios: Location inesperado" "/servicios/" "${loc:-(vacío)}";; esac
r=$(curl -sI -m 20 -o /dev/null -w '%{http_code} %{redirect_url}' "$BASE/crecimiento/mantenimiento-hosting-web-panama"); has "301 histórico de mantenimiento" "301" "$r"

echo "== Códigos =="
for p in / /precios/ /casos-de-exito/ /guias/ /miami/ /contacto/ /robots.txt /sitemap-index.xml /llms.txt /fonts/outfit-latin-800-normal.woff2; do eqc "200 $p" 200 "$(code "$BASE$p")"; done
eqc "404 real en página inexistente" 404 "$(code "$BASE/esta-pagina-no-existe-$$")"

echo "== Cabeceras de seguridad =="
h=$(hdr "$BASE/" x-content-type-options); eqc "X-Content-Type-Options" "nosniff" "$h"
h=$(hdr "$BASE/" referrer-policy); has "Referrer-Policy" "strict-origin" "$h"
h=$(hdr "$BASE/" x-frame-options); has "X-Frame-Options" "sameorigin" "$h"
h=$(hdr "$BASE/" permissions-policy); has "Permissions-Policy" "camera=()" "$h"
h=$(hdr "$BASE/" content-security-policy-report-only); has "CSP en solo-reporte" "default-src" "$h"
h=$(hdr "$BASE/" server); case "$h" in *[0-9].[0-9]*) ko "Server no debe mostrar versión" "nginx" "$h";; *) ok "Server sin versión ($h)";; esac
[ "$LOCAL" = 0 ] && { h=$(hdr "$BASE/" strict-transport-security); has "HSTS (lo pone Traefik/Coolify)" "max-age" "$h"; }

echo "== Documentos de cliente =="
h=$(hdr "$BASE/propuestas/evolutionpmc-servidor-vps/" x-robots-tag); has "X-Robots-Tag noindex en /propuestas/" "noindex" "$h"

echo "== Contenido =="
html=$(curl -s -m 20 "$BASE/")
echo "$html" | grep -q 'G-J0NHHRTV75' && ok "GA4 presente en la home" || ko "GA4 presente en la home" "G-J0NHHRTV75" "no encontrado"
echo "$html" | grep -q 'fonts.googleapis.com' && ko "sin Google Fonts" "0 referencias" "hay referencias" || ok "sin Google Fonts"
echo "$html" | grep -q '<link rel="canonical" href="https://elementoweb.com/"' && ok "canonical de la home" || ko "canonical de la home" "https://elementoweb.com/" "distinto"
echo "$html" | grep -qi 'Agencia de diseño web en Panamá\. Páginas corporativas' && ok "meta descripción nueva" || ko "meta descripción nueva" "Agencia de diseño web en Panamá…" "distinta"
h=$(hdr "$BASE/robots.txt" content-type); has "robots.txt es texto" "text/plain" "$h"

printf '\n%s ok · %s fallos\n' "$pass" "$fail"; [ "$fail" = 0 ]
