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

- [ ] Criar uma interface em **Vue.js** para interagir com a API.
- [ ] O front-end deve permitir:
    - [ ] Cadastro, login e logout de usuários.
    - [ ] CRUD de projetos.
    - [ ] Associação de projetos a clientes.
- [ ] Utilizar **Vue Router** para navegação entre páginas.
- [ ] Interface responsiva e amigável.

## **Entrega e Construção**

- [ ] Criar um repositório **privado** no GitHub e compartilhar com **@luiszxcv (luisfelipesantoszxcv@hotmail.com)**
- [ ] Enviar um **PDF contendo o esquema da API** (exemplo: estrutura de endpoints e JSON de respostas esperadas).
- [ ] As **mensagens dos commits serão analisadas**, então seja claro e objetivo.
- [ ] A aplicação deve rodar com **Docker**, contendo um `Dockerfile` para cada serviço (back e front).
- [ ] Fornecer um arquivo `README.md` no repositório, explicando como rodar o projeto localmente e via Docker.

---

## **Diferenciais**

- [ ] Implementação de um design agradável no front.
- [ ] Deploy da aplicação (mesmo que apenas back ou front).