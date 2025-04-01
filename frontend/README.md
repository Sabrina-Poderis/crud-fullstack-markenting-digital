# Fullstack Marketing Digital Frontend

## Descrição

Frontend do sistema para gerenciar usuários e projetos de clientes de marketing digital. A aplicação se comunica com o backend via API REST e é construída com Vue.js, TypeScript, Vite, e outras ferramentas modernas de desenvolvimento.

## Tecnologias

- **Vue.js** (v3)
- **TypeScript**
- **Vite** (Ferramenta de build)
- **Vue Router** (Para roteamento)
- **Axios** (Para chamadas API)
- **Prettier** (Formatação de código)
- **ESLint** (Linter de código)
- **Docker** (Contêinerização)

## Scripts

- `dev`: Inicia o servidor de desenvolvimento com Vite.
  ```bash
  yarn dev
  ```

- `build`: Realiza a construção do projeto, incluindo verificação de tipos com `vue-tsc`.
  ```bash
  yarn build
  ```

- `preview`: Visualiza o projeto após a construção.
  ```bash
  yarn preview
  ```

- `lint`: Executa o ESLint e corrige automaticamente os problemas de código.
  ```bash
  yarn lint
  ```

- `format`: Formata o código usando Prettier.
  ```bash
  yarn format
  ```

- `docker:build`: Cria a imagem Docker para o frontend.
  ```bash
  yarn docker:build
  ```

- `docker:start`: Inicia o container Docker para o frontend, expondo a porta 8080.
  ```bash
  yarn docker:start
  ```

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url_do_repositório>
   cd fullstack-marketing-digital-frontend
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
FRONTEND_PORT=8080
VITE_API_URL=http://localhost:10000
JWT_SECRET=your_jwt_secret
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por Sabrina Poderis <sabrina.poderis@gmail.com>.
