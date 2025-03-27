import { Client } from "../models/Client";
import { Project } from "../models/Project";
import ProjectCreateRequest from "../ts/types/ProjectCreateRequest";

export default class ProjectRepository {
  async create(data: ProjectCreateRequest): Promise<Project> {
    return await Project.create(data);
  }

  async update(id: number, data: ProjectCreateRequest) {
    return await Project.update(data, { where: { id, deletedAt: null } });
  }

  async findAll(): Promise<Project[]> {
    return await Project.findAll({ where: { deletedAt: null } });
  }

  async findById(id: number): Promise<Project | null> {
    return await Project.findOne({
      where: { id, deletedAt: null },
      include: [{ model: Client }],
    });
  }

  async delete(id: number): Promise<boolean> {
    const project = await this.findById(id);

    if (project) {
      await project.destroy();
      return true;
    }
    return false;
  }
}
