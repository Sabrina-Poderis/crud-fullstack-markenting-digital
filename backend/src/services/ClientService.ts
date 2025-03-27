import { Client } from "../models/Client";

type CreateClientRequest = {
  name: string;
  email: string;
  phone: string;
  company: string;
  deletedAt?: Date;
};

export default class ClientService {
  async create(data: CreateClientRequest) {
    return await Client.create(data);
  }

  async update(id: number, data: Omit<CreateClientRequest, 'email'>) {
    return await Client.update(data, { where: { id, deletedAt: null } });
  }

  async find() {
    return await Client.findAll({where: {deletedAt: null}});
  }

  async findById(id: number) {
    return await Client.findOne({ where: { id, deletedAt: null } });
  }

  async findByEmail(email: string) {
    return await Client.findOne({ where: { email, deletedAt: null } });
  }

  async delete(id: number) {
    const client = await this.findById(id)
    
    if(client){
      await client.destroy();
      return true
    }
    return false
  }
}
