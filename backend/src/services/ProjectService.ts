import { Project } from "../models/Project";
import ProjectRepository from "../repositories/ProjectRepository";
import ResponseMessages from "../ts/enum/ResponseMessages";
import ApiResponseInterface from "../ts/interfaces/ApiResponseInterface";
import ProjectCreateRequest from "../ts/types/ProjectCreateRequest";
export default class ProjectService {
  private projectRepository: ProjectRepository;

  constructor() {
    this.projectRepository = new ProjectRepository();
  }

  async create(
    data: ProjectCreateRequest
  ): Promise<ApiResponseInterface<Project>> {
    try {
      const project = await this.projectRepository.create(data);

      if (project) {
        return {
          status: 201,
          message: ResponseMessages.PROJECT_CREATED,
          data: project,
        };
      }
      return {
        status: 500,
        message: ResponseMessages.PROJEC_NOT_CREATED,
      };
    } catch (error) {
      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async update(
    id: number,
    data: ProjectCreateRequest
  ): Promise<ApiResponseInterface<Project>> {
    try {
      await this.projectRepository.update(id, data);
      const project = await this.projectRepository.findById(id);

      if (project) {
        return {
          status: 201,
          message: ResponseMessages.PROJECT_UPDATED,
          data: project,
        };
      }
      return {
        status: 500,
        message: ResponseMessages.PROJEC_NOT_UPDATED,
      };
    } catch (error) {
      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async findAll(): Promise<ApiResponseInterface<Project[]>> {
    try {
      const projects = await this.projectRepository.findAll();

      if (!projects) {
        return {
          status: 400,
          message: ResponseMessages.PROJECTS_NOT_FOUNDED,
        };
      }

      return { status: 200, data: projects };
    } catch (error) {
      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async findById(id: number): Promise<ApiResponseInterface<Project>> {
    try {
      const project = await this.projectRepository.findById(id);

      if (!project) {
        return { status: 404, message: ResponseMessages.PROJECT_NOT_FOUNDED };
      }

      return { status: 200, data: project };
    } catch (error) {
      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async delete(id: number): Promise<ApiResponseInterface<undefined>> {
    try {
      const deleted = await this.projectRepository.delete(id);

      if (!deleted) {
        return { status: 400, message: ResponseMessages.PROJECT_NOT_DELETED };
      }

      return {
        status: 201,
        message: ResponseMessages.PROJECT_DELETED,
      };
    } catch (error) {
      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    }
  }
}
