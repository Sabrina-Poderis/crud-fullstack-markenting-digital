import express from "express";
import ProjectController from "../controller/ProjectController";
import authMiddleware from "../middleware/authMiddleware";
import validateSchema from "../middleware/validateSchema";
import CreateProjectSchema from "../schema/CreateProjectSchema";
import GetIdSchema from "../schema/GetIdSchema";

const ProjectRoutes = express.Router();
const projectController = new ProjectController();

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Endpoints relacionados a projetos
 */

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Retorna todos os projetos
 *     description: Obtém a lista de projetos cadastrados
 *     tags: [Projects]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de projetos.
 *       400:
 *         description: Nenhum projeto encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
ProjectRoutes.get(
  "/",
  authMiddleware,
  projectController.findAll.bind(projectController)
);

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Retorna um projeto específico pelo ID
 *     description: Obtém os detalhes de um projeto pelo seu ID
 *     tags: [Projects]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do projeto
 *     responses:
 *       200:
 *         description: Projeto encontrado.
 *       400:
 *         description: Projeto não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
ProjectRoutes.get(
  "/:id",
  authMiddleware,
  validateSchema({ params: GetIdSchema }),
  projectController.findOne.bind(projectController)
);
/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Cria um novo projeto
 *     description: Adiciona um novo projeto ao sistema
 *     tags: [Projects]
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
 *                 description: Nome do projeto.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Endereço de e-mail do projeto.
 *     responses:
 *       201:
 *         description: Projeto criado com sucesso.
 *       400:
 *         description: Projeto já existe.
 *       500:
 *         description: Erro interno do servidor.
 */
ProjectRoutes.post(
  "/",
  authMiddleware,
  validateSchema({ body: CreateProjectSchema }),
  projectController.create.bind(projectController)
);
/**
 * @swagger
 * /api/projects/{id}:
 *   put:
 *     summary: Atualiza um projeto
 *     description: Atualiza os dados de um projeto existente
 *     tags: [Projects]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do projeto
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
 *                 description: Nome do projeto.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Endereço de e-mail do projeto.
 *     responses:
 *       201:
 *         description: Projeto atualizado com sucesso.
 *       400:
 *         description: Projeto não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
ProjectRoutes.put(
  "/:id",
  authMiddleware,
  validateSchema({ params: GetIdSchema, body: CreateProjectSchema }),
  projectController.update.bind(projectController)
);

/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     summary: Exclui um projeto pelo ID
 *     description: Remove um projeto do sistema
 *     tags: [Projects]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do projeto
 *     responses:
 *       200:
 *         description: Projeto excluído com sucesso.
 *       400:
 *         description: Projeto não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
ProjectRoutes.delete(
  "/:id",
  authMiddleware,
  validateSchema({ params: GetIdSchema }),
  projectController.delete.bind(projectController)
);

export default ProjectRoutes;
