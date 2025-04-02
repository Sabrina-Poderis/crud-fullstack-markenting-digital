# Fullstack Marketing Digital

## Descrição

Aplicação **full-stack** simples desenvolvida com **Express.js** no back-end e **Vue.js** no front-end. O sistema permite o gerenciamento de usuários e projetos de clientes de marketing digital, com comunicação via API REST.

## Deploy

Por enquanto só o backend está disponível na url!

## Tecnologias Utilizadas

- **Backend**:
  - **Express.js** (para construção da API REST)
  - **TypeScript** (para tipagem estática e melhor desenvolvimento)
  - **Sequelize** (ORM para interação com o banco de dados PostgreSQL)

- **Frontend**:
  - **Vue.js** (framework para construção da interface do usuário)
  - **TypeScript** (para tipagem estática)
  - **Vite** (ferramenta de build e desenvolvimento)

## Funcionalidades

- Gerenciamento de **usuários** e **projetos** de clientes de marketing digital.
- API REST para comunicação entre o frontend e backend.
- Possibilidade de cadastro, atualização, leitura e remoção de projetos e usuários.

## Scripts

- `install:all`: Instala todas as dependências para o frontend e backend.
  ```bash
  yarn install:all
  ```

- `docker:start`: Inicia o sistema utilizando Docker e Docker Compose.
  ```bash
  yarn docker:start
  ```

## Estrutura de Repositório

Este projeto é dividido em dois principais diretórios: `frontend` e `backend`. Ambos os diretórios contêm seus próprios arquivos de configuração e dependências.

### Frontend
O **frontend** foi desenvolvido utilizando **Vue.js** e **TypeScript**, com a comunicação com o backend via API REST.

- **Documentação do Frontend**: [Documentação do Frontend](./frontend/README.md)

### Backend
O **backend** foi desenvolvido utilizando **Express.js** e **TypeScript**, com o banco de dados PostgreSQL sendo gerenciado através do **Sequelize**.

- **Documentação do Backend**: [Documentação do Backend](./backend/README.md)
- **Documentação da API Backend**: [Documentação da API Backend](./backend/API.md)

## Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone <url_do_repositório>
   cd fullstack-marketing-digital
   ```

2. Instale as dependências para o frontend e backend:
   ```bash
   yarn install:all
   ```
3. Crie um arquivo `.env` na raiz do projeto, e das pastas `frontend` e `backend` e adicione as variáveis de ambiente necessárias conforme o arquivo `.env.example`.

3. Inicie o projeto com Docker:
   ```bash
   yarn docker:start
   ```

   Ou, se preferir, você pode rodar o frontend e backend separadamente em seus respectivos diretórios.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por Sabrina Poderis <sabrina.poderis@gmail.com>.