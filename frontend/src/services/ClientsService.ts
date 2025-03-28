import type { Client, Clients } from "../ts/types/Client";
import api from "./api";

export const ClientsService = {
  async get(): Promise<Clients[]> {
    try {
      const response = await api.get("/clients");
      return response.data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async getOne(id: number): Promise<Client> {
    try {
      const response = await api.get(`/clients/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return { name: "", email: "", phone: "", company: "" };
    }
  },
  async create(body: {
    name: string;
    email: string;
    phone: string;
    company: string;
  }): Promise<Client> {
    try {
      const response = await api.post("/clients", body);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return { name: "", email: "", phone: "", company: "" };
    }
  },
  async update(
    id: number,
    body: { name: string; email: string; phone: string; company: string }
  ): Promise<Client> {
    try {
      const response = await api.put(`/clients/${id}`, body);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return { name: "", email: "", phone: "", company: "" };
    }
  },
  async delete(id: number): Promise<boolean> {
    try {
      await api.delete(`/clients/${id}`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
