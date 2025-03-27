import { Request, Response } from "express";
import ResponseMessages from "../ts/enum/ResponseMessages";
import ProjectService from "../services/ProjectService";
import validateCreateProjectBody from "../schema/validateCreateProjectBody";
import validateGetId from "../schema/validateGetId";

export default class UserController {
  private projectService: ProjectService;

  constructor() {
    this.projectService = new ProjectService();
  }

  async create(req: Request, res: Response): Promise<void> {
    const bodyValidated = validateCreateProjectBody(req.body);
    if (bodyValidated.error) {
      res.status(400).json({ message: bodyValidated.message });
      return;
    }

    const result = await this.projectService.create(req.body);
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined,
    });
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.query;

    const bodyValidated = validateCreateProjectBody(req.body);
    const validatedIdQuery = validateGetId(req.query);

    if (bodyValidated.error) {
      res.status(400).json({ message: bodyValidated.message });
      return;
    }

    if (validatedIdQuery.error) {
      res.status(400).json({ message: validatedIdQuery.message });
      return;
    }

    const result = await this.projectService.update(Number(id), req.body);
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined,
    });
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.query;

    const validatedIdQuery = validateGetId(req.query);
    if (validatedIdQuery.error) {
      res.status(400).json({ message: validatedIdQuery.message });
      return;
    }

    const result = await this.projectService.delete(Number(id));
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined,
    });
  }

  async findOne(req: Request, res: Response): Promise<void> {
    const { id } = req.query;

    const validatedIdQuery = validateGetId(req.query);
    if (validatedIdQuery.error) {
      res.status(400).json({ message: validatedIdQuery.message });
      return;
    }
    const result = await this.projectService.findById(Number(id));
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined,
    });
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    const result = await this.projectService.findAll();
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined,
    });
  }
}
