import express from 'express';
import UserController from '../controller/UserController';

const UserRoutes = express.Router();
const userController = new UserController();

UserRoutes.post('/register', userController.register.bind(userController));
UserRoutes.post('/login', userController.login.bind(userController));

export default UserRoutes;