import express from "express";
import UserController from "../controller/UserController";
import validateSchema from "../middleware/validateSchema";
import CreateUserSchema from "../schema/CreateUserSchema";
import LoginSchema from "../schema/LoginSchema";

const UserRoutes = express.Router();
const userController = new UserController();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints relacionados a usuários
 */

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Registra um novo usuário
 *     description: Cria um novo usuário e retorna um token JWT.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Endereço de e-mail do usuário.
 *               password:
 *                 type: string
 *                 description: Senha segura do usuário.
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 201
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: "jwt-token-aqui"
 *                 message:
 *                   type: string
 *                   example: "Usuário criado com sucesso."
 *       400:
 *         description: Usuário já existe.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Usuário já existe."
 *       500:
 *         description: Erro interno do servidor.
 */
UserRoutes.post(
  "/register",
  validateSchema({ body: CreateUserSchema }),
  userController.register.bind(userController)
);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Faz o login de um usuário
 *     description: Autentica o usuário e retorna um token JWT.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Endereço de e-mail do usuário.
 *               password:
 *                 type: string
 *                 description: Senha do usuário.
 *     responses:
 *       200:
 *         description: Login bem-sucedido e token gerado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: "jwt-token-aqui"
 *       400:
 *         description: Senha incorreta.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Senha incorreta."
 *       404:
 *         description: Usuário não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Usuário não encontrado."
 *       500:
 *         description: Erro interno do servidor.
 */
UserRoutes.post(
  "/login",
  validateSchema({ body: LoginSchema }),
  userController.login.bind(userController)
);

export default UserRoutes;
