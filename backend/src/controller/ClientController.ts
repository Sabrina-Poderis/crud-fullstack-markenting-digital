import { Request, Response } from "express";
import validateCreateClientBody from "../schema/validateCreateClientBody";
import validateGetId from "../schema/validateGetId";
import ClientService from "../services/ClientService";

export default class UserController {
  private clientService: ClientService;

  constructor() {
    this.clientService = new ClientService();
  }

  async create(req: Request, res: Response): Promise<void> {
    const bodyValidated = validateCreateClientBody(req.body);
    if (bodyValidated.error) {
      res.status(400).json({ message: bodyValidated.message });
      return;
    }

    const result = await this.clientService.create(req.body);
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined,
    });
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.query;

    const bodyValidated = validateCreateClientBody(req.body);
    const validatedIdQuery = validateGetId(req.query);

    if (bodyValidated.error) {
      res.status(400).json({ message: bodyValidated.message });
      return;
    }

    if (validatedIdQuery.error) {
      res.status(400).json({ message: validatedIdQuery.message });
      return;
    }

    const result = await this.clientService.update(Number(id), req.body);
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

    const result = await this.clientService.delete(Number(id));
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

    const result = await this.clientService.findById(Number(id));
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined,
    });
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    const result = await this.clientService.findAll();
    res.status(result.status).json({
      message: result.message,
      data: result?.data || undefined,
    });
  }
}
