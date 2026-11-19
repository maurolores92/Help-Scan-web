# =========================================================================
# STAGE 1: Build de producción (Vite + TypeScript)
# =========================================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Instalar dependencias de forma determinista con package-lock.json
COPY package.json package-lock.json* ./
RUN npm ci

# Copiar código fuente y recursos estáticos (incluye public/images)
COPY . .

# Variables inyectadas en tiempo de compilación por Vite
ARG VITE_API_URL=https://api-scan.helpcopies.com/api
ARG VITE_PORTAL_URL=https://scan.helpcopies.com
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_PORTAL_URL=$VITE_PORTAL_URL

RUN npm run build

# =========================================================================
# STAGE 2: Servidor Nginx ligero y optimizado para producción
# =========================================================================
FROM nginx:1.27-alpine AS runner

# Configuración Nginx para SPA en el puerto 3001
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar compilado estático desde el builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --spider -q http://127.0.0.1:3001/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
