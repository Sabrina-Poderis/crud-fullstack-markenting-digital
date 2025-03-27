import express from 'express';
import ProjectController from '../controller/ProjectController';
import authMiddleware from '../middleware/authMiddleware';

const ProjectRoutes = express.Router();
const projectController = new ProjectController();

ProjectRoutes.get('/', authMiddleware, projectController.find);
ProjectRoutes.get('/:id', authMiddleware, projectController.findOne);
ProjectRoutes.post('/', authMiddleware, projectController.create);
ProjectRoutes.put('/:id', authMiddleware, projectController.update);
ProjectRoutes.delete('/:id', authMiddleware, projectController.delete);

export default ProjectRoutes;