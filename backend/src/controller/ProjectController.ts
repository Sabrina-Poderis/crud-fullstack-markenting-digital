import { Request, Response } from "express";
import ProjectService from "../services/ProjectService";

export default class ProjectController {
  private projectService: ProjectService;

  constructor() {
    this.projectService = new ProjectService();
  }

  async create(req: Request, res: Response): Promise<void> {
    const result = await this.projectService.create(req.body);
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined,
    });
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const result = await this.projectService.update(Number(id), req.body);
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined,
    });
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const result = await this.projectService.delete(Number(id));
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined,
    });
  }

  async findOne(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

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
