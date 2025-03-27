import express from 'express';
import ClientController from '../controller/ClientController';
import authMiddleware from '../middleware/authMiddleware';

const ClientRoutes = express.Router();
const clientController = new ClientController();

ClientRoutes.get('/', authMiddleware, clientController.findAll);
ClientRoutes.get('/:id', authMiddleware, clientController.findOne);
ClientRoutes.post('/', authMiddleware, clientController.create);
ClientRoutes.put('/:id', authMiddleware, clientController.update);
ClientRoutes.delete('/:id', authMiddleware, clientController.delete);

export default ClientRoutes;