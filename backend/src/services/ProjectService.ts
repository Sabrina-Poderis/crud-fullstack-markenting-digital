import { Client } from "../models/Client";
import { Project } from "../models/Project";

type CreateProjectRequest = {
  id: number;
  name: string;
  description: string;
  budget: number;
  startDate: Date;
  endDate: Date;
  clientId: number;
  client: Client;
  deletedAt?: Date;
};

export default class ProjectService {
  async create(data: Omit<CreateProjectRequest, "id" | "client" | "deletedAt">) {
    return await Project.create(data);
  }

  async update(id: number, data: Omit<CreateProjectRequest, "id" | "client" | "deletedAt">) {
    return await Project.update(data, { where: { id, deletedAt: null } });
  }

  async find() {
    return await Project.findAll({ where: { deletedAt: null } });
  }

  async findById(id: number) {
    return await Project.findOne({
      where: { id, deletedAt: null },
      include: [{ model: Client }],
    });
  }

  async delete(id: number) {
    const project = await this.findById(id);

    if (project) {
      await project.destroy();
      return true;
    }
    return false;
  }
}
