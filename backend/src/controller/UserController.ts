import { Request, Response } from "express";
import UserService from "../services/UserService";
export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async register(req: Request, res: Response): Promise<void> {
    const result = await this.userService.register(req.body)
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined
    });
  }

  async login(req: Request, res: Response): Promise<void> {
    const result = await this.userService.login(req.body)
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined
    });
  }
}
