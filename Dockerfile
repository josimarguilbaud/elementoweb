# Builder de Astro. Coolify (modo static) toma /app/dist y lo sirve con nginx.
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
# El sitio queda en /app/dist — Coolify lo copia a su nginx.
