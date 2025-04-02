import express from "express";
import ProjectController from "../controller/ProjectController";
import authMiddleware from "../middleware/authMiddleware";
import validateSchema from "middleware/validateSchema";
import CreateProjectSchema from "schema/CreateProjectSchema";
import GetIdSchema from "schema/GetIdSchema";

const ProjectRoutes = express.Router();
const projectController = new ProjectController();

ProjectRoutes.get(
  "/",
  authMiddleware,
  projectController.findAll.bind(projectController)
);
ProjectRoutes.get(
  "/:id",
  authMiddleware,
  validateSchema({ params: GetIdSchema }),
  projectController.findOne.bind(projectController)
);
ProjectRoutes.post(
  "/",
  authMiddleware,
  validateSchema({ body: CreateProjectSchema }),
  projectController.create.bind(projectController)
);
ProjectRoutes.put(
  "/:id",
  authMiddleware,
  validateSchema({ params: GetIdSchema, body: CreateProjectSchema }),
  projectController.update.bind(projectController)
);
ProjectRoutes.delete(
  "/:id",
  authMiddleware,
  validateSchema({ params: GetIdSchema }),
  projectController.delete.bind(projectController)
);

export default ProjectRoutes;
