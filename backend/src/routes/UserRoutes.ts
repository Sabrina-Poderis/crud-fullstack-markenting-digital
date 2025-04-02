import express from "express";
import UserController from "../controller/UserController";
import validateSchema from "../middleware/validateSchema";
import CreateUserSchema from "schema/CreateUserSchema";
import LoginSchema from "schema/LoginSchema";

const UserRoutes = express.Router();
const userController = new UserController();

UserRoutes.post(
  "/register",
  validateSchema({ body: CreateUserSchema }),
  userController.register.bind(userController)
);
UserRoutes.post(
  "/login",
  validateSchema({ body: LoginSchema }),
  userController.login.bind(userController)
);

export default UserRoutes;
