import { Client } from "../models/Client";
import ClientRepository from "../repositories/ClientRepository";
import ResponseMessages from "../ts/enum/ResponseMessages";
import ApiResponseInterface from "../ts/interfaces/ApiResponseInterface";
import ClientCreateRequest from "../ts/types/ClientCreateRequest";
import ClientUpdateRequest from "../ts/types/ClientUpdateRequest";

export default class ClientService {
  private clientRepository: ClientRepository;

  constructor() {
    this.clientRepository = new ClientRepository();
  }

  async create(
    data: ClientCreateRequest
  ): Promise<ApiResponseInterface<Client>> {
    try {
      if (await this.clientRepository.findByEmail(data.email)) {
        return { status: 400, message: ResponseMessages.CLIENT_ALREADY_EXISTS };
      }

      const client = await this.clientRepository.create(data);

      if (client) {
        return {
          status: 201,
          message: ResponseMessages.CLIENT_CREATED,
          data: client,
        };
      } else {
        return {
          status: 500,
          message: ResponseMessages.CLIENT_NOT_CREATED,
        };
      }
    } catch (error) {
      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async update(
    id: number,
    data: ClientUpdateRequest
  ): Promise<ApiResponseInterface<Client>> {
    try {
      await this.clientRepository.update(id, data);

      const client = await this.clientRepository.findById(id);
      if (client) {
        return {
          status: 201,
          message: ResponseMessages.CLIENT_UPDATED,
          data: client,
        };
      } else {
        return {
          status: 500,
          message: ResponseMessages.CLIENT_NOT_UPDATED,
        };
      }
    } catch (error) {
      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async findAll(): Promise<ApiResponseInterface<Client[]>> {
    try {
      const clients = await this.clientRepository.findAll();

      if (!clients) {
        return { status: 400, message: ResponseMessages.CLIENTS_NOT_FOUNDED };
      }

      return { status: 200, data: clients };
    } catch (error) {
      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async findById(id: number): Promise<ApiResponseInterface<Client>> {
    try {
      const client = await this.clientRepository.findById(id);

      if (!client) {
        return { status: 400, message: ResponseMessages.CLIENT_NOT_FOUNDED };
      }

      return { status: 200, data: client };
    } catch (error) {
      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async delete(id: number): Promise<ApiResponseInterface<undefined>> {
    try {
      const deleted = await this.clientRepository.delete(id);

      if (!deleted) {
        return { status: 400, message: ResponseMessages.CLIENT_NOT_DELETED };
      }

      return {
        status: 201,
        message: ResponseMessages.CLIENT_DELETED,
      };
    } catch (error) {
      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    }
  }
}
