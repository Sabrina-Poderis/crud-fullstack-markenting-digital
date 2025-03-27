import { Request, Response } from "express";
import ResponseMessages from "../ts/enum/ResponseMessages";
import ClientService from "../services/ClientService";
import validateCreateClientBody from "../schema/validateCreateClientBody";
import validateGetId from "../schema/validateGetId";

export default class UserController {
  private clientService: ClientService;

  constructor() {
    this.clientService = new ClientService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, phone, company } = req.body;

      const resultValidate = validateCreateClientBody(req.body);
      if (resultValidate.hasError) {
        res.status(400).json({ message: resultValidate.message });
        return;
      }

      if (await this.clientService.findByEmail(email)) {
        res.status(400).json({ message: ResponseMessages.CLIENT_ALREADY_EXISTS });
        return;
      }

      const user = await this.clientService.create({
        name,
        email,
        phone,
        company
      });

      if (user) {
        res.status(201).json({
          message: ResponseMessages.CLIENT_CREATED,
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

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { name, phone, company } = req.body;
      const { id } = req.query;

      const resultValidate = validateCreateClientBody(req.body);
      const resultValidateId = validateGetId(req.query);
      
      if (resultValidate.hasError) {
        res.status(400).json({ message: resultValidate.message });
        return;
      }

      if (resultValidateId.hasError) {
        res.status(400).json({ message: resultValidateId.message });
        return;
      }

      const client = await this.clientService.findById(Number(id))

      if (!client) {
        res.status(400).json({ message: ResponseMessages.CLIENT_NOT_FOUNDED });
        return;
      }

      const user = await this.clientService.update(Number(id), {
        name,
        phone,
        company
      });

      if (user) {
        res.status(201).json({
          message: ResponseMessages.CLIENT_UPDATED,
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

      const deleted = await this.clientService.delete(Number(id))

      if (!deleted) {
        res.status(400).json({ message: ResponseMessages.CLIENT_NOT_FOUNDED });
        return;
      }

      res.status(201).json({
        message: ResponseMessages.CLIENT_DELETED,
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

      const client = await this.clientService.findById(Number(id));

      if (!client) {
        res.status(400).json({ message: ResponseMessages.CLIENT_NOT_FOUNDED });
        return;
      }

      res.status(200).json({ client });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }

  async find(_req: Request, res: Response): Promise<void> {
    try {
      const clients = await this.clientService.find();

      if (!clients) {
        res.status(400).json({ message: ResponseMessages.CLIENTS_NOT_FOUNDED });
        return;
      }

      res.status(200).json({ clients });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
