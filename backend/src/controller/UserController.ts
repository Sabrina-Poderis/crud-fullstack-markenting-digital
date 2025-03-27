import { Request, Response } from "express";
import validateCreateUserBody from "../schema/validateCreateUserBody";
import UserService from "../services/UserService";
import ResponseMessages from "../ts/enum/ResponseMessages";

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
  
      const resultValidate = validateCreateUserBody(req.body);
      if (resultValidate.hasError) {
        res.status(400).json({ message: resultValidate.message });
        return
      }
  
      const userAlreadyExists = await this.userService.findByEmail(email);
      if (userAlreadyExists) {
        res
          .status(400)
          .json({ message: ResponseMessages.USER_ALREADY_EXISTS });
        return
      }
  
      const user = await this.userService.create({
        name,
        email,
        password,
      });

      if (user) {
        res.status(201).json({
          message: ResponseMessages.USER_CREATED,
          user
        });
      } else {
        res.status(500).json({
          message: ResponseMessages.INTERNAL_SERVER_ERROR,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }
  
}
