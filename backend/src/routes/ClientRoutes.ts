import express from "express";
import ClientController from "../controller/ClientController";
import authMiddleware from "../middleware/authMiddleware";
import validateSchema from "middleware/validateSchema";
import CreateClientSchema from "schema/CreateClientSchema";
import GetIdSchema from "schema/GetIdSchema";

const ClientRoutes = express.Router();
const clientController = new ClientController();

ClientRoutes.get(
  "/",
  authMiddleware,
  clientController.findAll.bind(clientController)
);
ClientRoutes.get(
  "/:id",
  authMiddleware,
  validateSchema({ params: GetIdSchema }),
  clientController.findOne.bind(clientController)
);
ClientRoutes.post(
  "/",
  authMiddleware,
  validateSchema({ body: CreateClientSchema }),
  clientController.create.bind(clientController)
);
ClientRoutes.put(
  "/:id",
  authMiddleware,
  validateSchema({ params: GetIdSchema, body: CreateClientSchema }),
  clientController.update.bind(clientController)
);
ClientRoutes.delete(
  "/:id",
  authMiddleware,
  validateSchema({ params: GetIdSchema }),
  clientController.delete.bind(clientController)
);

export default ClientRoutes;
