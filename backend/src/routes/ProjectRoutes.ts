import express from 'express';
import ProjectController from '../controller/ProjectController';
import authMiddleware from '../middleware/authMiddleware';

const ProjectRoutes = express.Router();
const projectController = new ProjectController();

ProjectRoutes.get('/', authMiddleware, projectController.findAll.bind(ProjectController));
ProjectRoutes.get('/:id', authMiddleware, projectController.findOne.bind(ProjectController));
ProjectRoutes.post('/', authMiddleware, projectController.create.bind(ProjectController));
ProjectRoutes.put('/:id', authMiddleware, projectController.update.bind(ProjectController));
ProjectRoutes.delete('/:id', authMiddleware, projectController.delete.bind(ProjectController));

export default ProjectRoutes;