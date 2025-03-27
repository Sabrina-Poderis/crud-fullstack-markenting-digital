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
    try {
      const { name, description, budget, startDate, endDate, clientId } =
        req.body;

      const resultValidate = validateCreateProjectBody(req.body);
      if (resultValidate.hasError) {
        res.status(400).json({ message: resultValidate.message });
        return;
      }

      const project = await this.projectService.create({
        name,
        description,
        budget,
        startDate,
        endDate,
        clientId,
      });

      if (project) {
        res.status(201).json({
          message: ResponseMessages.PROJECT_CREATED,
          user: project,
        });
        return;
      }
      res.status(500).json({
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { name, description, budget, startDate, endDate, clientId } =
        req.body;
      const { id } = req.query;

      const resultValidate = validateCreateProjectBody(req.body);
      const resultValidateId = validateGetId(req.query);

      if (resultValidate.hasError) {
        res.status(400).json({ message: resultValidate.message });
        return;
      }

      if (resultValidateId.hasError) {
        res.status(400).json({ message: resultValidateId.message });
        return;
      }

      const project = await this.projectService.findById(Number(id));

      if (!project) {
        res.status(400).json({ message: ResponseMessages.PROJECT_NOT_FOUNDED });
        return;
      }

      const user = await this.projectService.update(Number(id), {
        name,
        description,
        budget,
        startDate,
        endDate,
        clientId,
      });

      if (user) {
        res.status(201).json({
          message: ResponseMessages.PROJECT_UPDATED,
          user,
        });
        return;
      }
      res.status(500).json({
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.query;

      const resultValidateId = validateGetId(req.query);
      if (resultValidateId.hasError) {
        res.status(400).json({ message: resultValidateId.message });
        return;
      }

      const deleted = await this.projectService.delete(Number(id));

      if (!deleted) {
        res.status(400).json({ message: ResponseMessages.PROJECT_NOT_FOUNDED });
        return;
      }

      res.status(201).json({
        message: ResponseMessages.PROJECT_DELETED,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.query;

      const resultValidateId = validateGetId(req.query);
      if (resultValidateId.hasError) {
        res.status(400).json({ message: resultValidateId.message });
        return;
      }

      const project = await this.projectService.findById(Number(id));

      if (!project) {
        res.status(400).json({ message: ResponseMessages.PROJECT_NOT_FOUNDED });
        return;
      }

      res.status(200).json({ project });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async find(_req: Request, res: Response): Promise<void> {
    try {
      const projects = await this.projectService.find();

      if (!projects) {
        res
          .status(400)
          .json({ message: ResponseMessages.PROJECTS_NOT_FOUNDED });
        return;
      }

      res.status(200).json({ projects });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
