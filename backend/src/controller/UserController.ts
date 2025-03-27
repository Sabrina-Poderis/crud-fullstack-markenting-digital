import { Request, Response } from "express";
import validateCreateUserBody from "../schema/validateCreateUserBody";
import UserService from "../services/UserService";
import validateGetUserBody from "../schema/validateGetUserBody";
export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async register(req: Request, res: Response): Promise<void> {
    const bodyValidated = validateCreateUserBody(req.body);
    if (bodyValidated.error) {
      res.status(400).json({ message: bodyValidated.message });
      return;
    }

    const result = await this.userService.register(req.body)
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined
    });
  }

  async login(req: Request, res: Response): Promise<void> {
    const bodyValidated = validateGetUserBody(req.body);
    if (bodyValidated.error) {
      res.status(400).json({ message: bodyValidated.message });
      return;
    }

    const result = await this.userService.login(req.body)
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined
    });
  }
}
