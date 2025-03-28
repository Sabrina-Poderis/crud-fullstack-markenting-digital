# Fullstack Marketing Digital Backend

## Descrição

Sistema backend para gerenciar usuários e projetos de clientes de marketing digital via API REST. A aplicação é construída com TypeScript, Express, e Sequelize, e oferece rotas para manipulação de usuários e projetos, incluindo operações CRUD.

## Documentação da API

Veja a documentação em [API](./API.md)

## Tecnologias

- **Node.js** (v18 ou superior)
- **TypeScript**
- **Express**
- **Sequelize** (ORM para PostgreSQL)
- **bcryptjs** (Criptografia de senhas)
- **jsonwebtoken** (Autenticação via tokens JWT)
- **Joi** (Validação de dados)
- **Docker**

## Scripts

- `dev`: Inicia o servidor em modo de desenvolvimento com `ts-node`.
  ```bash
  yarn dev
  ```

- `docker:build`: Cria a imagem Docker para o backend.
  ```bash
  yarn docker:build
  ```

- `docker:start`: Inicia o container Docker, expondo a porta 5000.
  ```bash
  yarn docker:start
  ```

- `build`: Compila o código TypeScript para JavaScript.
  ```bash
  yarn build
  ```

- `start:prod`: Inicia o servidor no ambiente de produção, após a compilação do TypeScript.
  ```bash
  yarn start:prod
  ```

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url_do_repositório>
   cd fullstack-marketing-digital-backend
   ```

2. Instale as dependências:
   ```bash
   yarn
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias, como credenciais de banco de dados.

4. Execute o servidor:
   - **Modo desenvolvimento**: 
     ```bash
     yarn dev
     ```
   - **Modo produção**: 
     Primeiro, compile o TypeScript:
     ```bash
     yarn docker:build
     ```
     Depois, inicie o servidor:
     ```bash
     yarn docker:start
     ```

## Variáveis de Ambiente

Exemplo de variáveis de ambiente necessárias:

```env
BACKEND_PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=user
DB_PASSWORD=password
DB_NAME=db_name
JWT_SECRET=your_jwt_secret
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por Sabrina Poderis <sabrina.poderis@gmail.com>.