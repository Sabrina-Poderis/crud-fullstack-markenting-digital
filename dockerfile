# Etapa de construção do backend
FROM node:18 AS backend-build
WORKDIR /app

# Configuração para o backend
COPY backend/package*.json ./backend/
RUN yarn --cwd backend

COPY backend ./

WORKDIR /app/backend
RUN yarn build

# Etapa de construção do frontend
FROM node:18 AS frontend-build
WORKDIR /app

# Configuração para o frontend
COPY frontend/package*.json ./frontend/
RUN yarn --cwd frontend

COPY frontend ./

WORKDIR /app/frontend
RUN yarn build

# Etapa final: Nginx + Backend
FROM nginx:alpine

# Copiar o frontend para o Nginx
COPY --from=frontend-build /app/frontend/dist /usr/share/nginx/html

# Copiar o backend para dentro do container (se necessário)
WORKDIR /app
COPY --from=backend-build /app/backend /app/backend

# Expor a porta do Nginx e do Backend
EXPOSE 80
EXPOSE 5000

CMD ["sh", "-c", "yarn --cwd /app/backend start:prod && nginx -g 'daemon off;'"]
