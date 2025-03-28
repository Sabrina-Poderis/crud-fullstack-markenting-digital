## Teste Técnico - Desenvolvedor Full-Stack (Express.js & Vue.js)

## **Objetivo**

Criar uma aplicação full-stack simples com **Express.js** no back-end e **Vue.js** no front-end. O sistema deve permitir o gerenciamento de usuários e projetos de clientes de marketing digital, com comunicação via API REST.

---

## **Requisitos**

### **Back-end (Express.js)**

- [x] Criar uma API REST utilizando **Express.js**.
- [x] Implementar um sistema de **autenticação de usuários** usando **JWT**.
- [x] Criar um sistema de **gerenciamento de projetos**:
    - [x] CRUD básico de projetos (criação, leitura, atualização e exclusão).
    - [x] Associações de projetos a clientes.
- [x] Criar **endpoints** separados para usuários e projetos.
- [x] A API deve seguir boas práticas, incluindo separação de responsabilidades e uso de middlewares.
- [x] Fornecer um **Dockerfile** funcional para o ambiente do back-end.

#### Melhorias
- [x] Transformar os `services` em `repositories`, e passar as regras de negócio do `controller` para `services`
- [x] Migrar as tipagens das requisições para a pasta `ts`
- [ ] Melhorar a forma que é feito o validator da `Request`
- [ ] Incluir testes unitários
- [ ] Colocar doc do backend dentro do projeto ou um swagger
- [ ] Incluir o arquivo do postman

### **Front-end (Vue.js)**

- [x] Criar uma interface em **Vue.js** para interagir com a API.
- [x] O front-end deve permitir:
    - [x] Cadastro, login e logout de usuários.
    - [x] CRUD de projetos.
    - [x] Associação de projetos a clientes.
- [x] Utilizar **Vue Router** para navegação entre páginas.
- [x] Interface responsiva e amigável.

#### Melhorias
- [ ] Adicionar paginação na listagem de clientes e projetos.
- [ ] Implementar notificações/toasts para feedback ao usuário.
- [ ] Criar tela de carregamento (skeleton loaders/spinners).
- [ ] Criar componentes reutilizáveis (botões, formulários, modais, etc.).

## **Entrega e Construção**

- [ ] Criar um repositório **privado** no GitHub e compartilhar com **@luiszxcv (luisfelipesantoszxcv@hotmail.com)**
- [ ] Enviar um **PDF contendo o esquema da API** (exemplo: estrutura de endpoints e JSON de respostas esperadas).
- [x] As **mensagens dos commits serão analisadas**, então seja claro e objetivo.
- [x] A aplicação deve rodar com **Docker**, contendo um `Dockerfile` para cada serviço (back e front).
- [ ] Fornecer um arquivo `README.md` no repositório, explicando como rodar o projeto localmente e via Docker.

---

## **Diferenciais**

- [ ] Implementação de um design agradável no front.
- [ ] Deploy da aplicação (mesmo que apenas back ou front).