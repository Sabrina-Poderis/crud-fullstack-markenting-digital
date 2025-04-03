import express from "express";
import ClientController from "../controller/ClientController";
import authMiddleware from "../middleware/authMiddleware";
import validateSchema from "../middleware/validateSchema";
import CreateClientSchema from "../schema/CreateClientSchema";
import GetIdSchema from "../schema/GetIdSchema";

const ClientRoutes = express.Router();
const clientController = new ClientController();

/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: Endpoints relacionados a clientes
 */

/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Retorna todos os clientes
 *     description: Obtém a lista de clientes cadastrados
 *     tags: [Clients]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de clientes.
 *       400:
 *         description: Nenhum cliente encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
ClientRoutes.get(
  "/",
  authMiddleware,
  clientController.findAll.bind(clientController)
);

/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     summary: Retorna um cliente específico pelo ID
 *     description: Obtém os detalhes de um cliente pelo seu ID
 *     tags: [Clients]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado.
 *       400:
 *         description: Cliente não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
ClientRoutes.get(
  "/:id",
  authMiddleware,
  validateSchema({ params: GetIdSchema }),
  clientController.findOne.bind(clientController)
);

/**
 * @swagger
 * /api/clients:
 *   post:
 *     summary: Cria um novo cliente
 *     description: Adiciona um novo cliente ao sistema
 *     tags: [Clients]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do cliente.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Endereço de e-mail do cliente.
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso.
 *       400:
 *         description: Cliente já existe.
 *       500:
 *         description: Erro interno do servidor.
 */
ClientRoutes.post(
  "/",
  authMiddleware,
  validateSchema({ body: CreateClientSchema }),
  clientController.create.bind(clientController)
);

/**
 * @swagger
 * /api/clients/{id}:
 *   put:
 *     summary: Atualiza um cliente
 *     description: Atualiza os dados de um cliente existente
 *     tags: [Clients]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do cliente.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Endereço de e-mail do cliente.
 *     responses:
 *       201:
 *         description: Cliente atualizado com sucesso.
 *       400:
 *         description: Cliente não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
ClientRoutes.put(
  "/:id",
  authMiddleware,
  validateSchema({ params: GetIdSchema, body: CreateClientSchema }),
  clientController.update.bind(clientController)
);

/**
 * @swagger
 * /api/clients/{id}:
 *   delete:
 *     summary: Exclui um cliente pelo ID
 *     description: Remove um cliente do sistema
 *     tags: [Clients]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do cliente
 *     responses:
 *       200:
 *         description: Cliente excluído com sucesso.
 *       400:
 *         description: Cliente não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
ClientRoutes.delete(
  "/:id",
  authMiddleware,
  validateSchema({ params: GetIdSchema }),
  clientController.delete.bind(clientController)
);

export default ClientRoutes;
