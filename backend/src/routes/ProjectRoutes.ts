import express from 'express';
import ProjectController from '../controller/ProjectController';
import authMiddleware from '../middleware/authMiddleware';

const ProjectRoutes = express.Router();
const projectController = new ProjectController();

ProjectRoutes.get('/', authMiddleware, projectController.findAll.bind(projectController));
ProjectRoutes.get('/:id', authMiddleware, projectController.findOne.bind(projectController));
ProjectRoutes.post('/', authMiddleware, projectController.create.bind(projectController));
ProjectRoutes.put('/:id', authMiddleware, projectController.update.bind(projectController));
ProjectRoutes.delete('/:id', authMiddleware, projectController.delete.bind(projectController));

export default ProjectRoutes;