import { Client } from "../models/Client";
import { Project } from "../models/Project";
import ClientUpdateRequest from "../ts/types/ClientUpdateRequest";

type CreateClientRequest = {
  name: string;
  email: string;
  phone: string;
  company: string;
  deletedAt?: Date;
};

export default class ClientRepository {
  async create(data: CreateClientRequest): Promise<Client> {
    return await Client.create(data);
  }

  async update(id: number, data: ClientUpdateRequest) {
    return await Client.update(data, { where: { id, deletedAt: null } });
  }

  async findAll(): Promise<Client[]> {
    return await Client.findAll({where: {deletedAt: null}});
  }

  async findById(id: number): Promise<Client | null> {
    return await Client.findOne({
      where: { id, deletedAt: null },
      include: [{ model: Project }],
    });
  }

  async findByEmail(email: string): Promise<Client | null> {
    return await Client.findOne({ where: { email, deletedAt: null } });
  }

  async delete(id: number): Promise<boolean> {
    const client = await this.findById(id)
    
    if(client){
      await Project.update({ deletedAt: new Date() }, { where: { clientId: id } });
      await client.destroy();
      return true
    }
    return false
  }
}
