import express from 'express';
import ClientController from '../controller/ClientController';
import authMiddleware from '../middleware/authMiddleware';

const ClientRoutes = express.Router();
const clientController = new ClientController();

ClientRoutes.get('/', authMiddleware, clientController.findAll.bind(clientController));
ClientRoutes.get('/:id', authMiddleware, clientController.findOne.bind(clientController));
ClientRoutes.post('/', authMiddleware, clientController.create.bind(clientController));
ClientRoutes.put('/:id', authMiddleware, clientController.update.bind(clientController));
ClientRoutes.delete('/:id', authMiddleware, clientController.delete.bind(clientController));

export default ClientRoutes;