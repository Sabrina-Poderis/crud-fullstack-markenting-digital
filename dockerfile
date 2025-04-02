# Etapa de construção do backend
FROM node:18 AS backend-build
WORKDIR /app

# Copiar apenas o package.json e instalar dependências para otimizar cache
COPY backend/package*.json ./backend/
RUN cd backend && yarn install --frozen-lockfile

# Copiar o restante do código do backend
COPY backend ./backend/

# Construir o backend
WORKDIR /app/backend
RUN yarn build

# Etapa de construção do frontend
FROM node:18 AS frontend-build
WORKDIR /app

# Copiar apenas o package.json e instalar dependências
COPY frontend/package*.json ./frontend/
RUN cd frontend && yarn install --frozen-lockfile

# Copiar o restante do código do frontend
COPY frontend ./frontend/

# Construir o frontend
WORKDIR /app/frontend
RUN yarn build

# Etapa final: Nginx + Backend
FROM nginx:alpine
# Instalar Yarn no Alpine
RUN apk add --no-cache nodejs npm && npm install -g yarn

# Copiar o frontend para o Nginx
COPY --from=frontend-build /app/frontend/dist /usr/share/nginx/html

# Copiar o backend para dentro do container
WORKDIR /app
COPY --from=backend-build /app/backend /app/backend

# Expor a porta correta (Render só permite 1 porta pública)
EXPOSE 80
EXPOSE 10000

# Copiar a configuração do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Iniciar o backend corretamente (Render define a porta na variável PORT)
CMD ["sh", "-c", "cd /app/backend && yarn start:prod"]
