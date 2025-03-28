# Etapa de construção do backend
FROM node:18 AS backend-build
WORKDIR /app

# Copiar o package.json do backend e instalar as dependências
COPY backend/package*.json ./backend/
RUN yarn --cwd backend

# Copiar o código do backend para dentro da imagem
COPY backend ./backend/

# Trabalhar no diretório do backend e construir
WORKDIR /app/backend
RUN yarn build

# Etapa de construção do frontend
FROM node:18 AS frontend-build
WORKDIR /app

# Copiar o package.json do frontend e instalar as dependências
COPY frontend/package*.json ./frontend/
RUN yarn --cwd frontend

# Copiar o código do frontend para dentro da imagem
COPY frontend ./frontend/

# Trabalhar no diretório do frontend e construir
WORKDIR /app/frontend
RUN yarn build

# Etapa final: Nginx + Backend
FROM nginx:alpine

# Copiar o frontend para o Nginx
COPY --from=frontend-build /app/frontend/dist /usr/share/nginx/html

# Copiar o backend para dentro do container
WORKDIR /app
COPY --from=backend-build /app/backend /app/backend

# Expor as portas para o Nginx (frontend) e o backend
EXPOSE 80
EXPOSE 5000

# Iniciar o backend e o Nginx
CMD ["sh", "-c", "yarn --cwd /app/backend start:prod & nginx -g 'daemon off;'"]
