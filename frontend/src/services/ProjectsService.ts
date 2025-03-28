import type { Project, Projects } from "../ts/types/Project";
import api from "./api";

export const ProjectsService = {
  async get(): Promise<Projects[]> {
    try {
      const response = await api.get("/projects");
      return response.data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async getOne(id: number): Promise<Project> {
    try {
      const response = await api.get(`/projects/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return {
        name: "",
        description: "",
        budget: 0,
        startDate: new Date(),
        endDate: new Date(),
        clientId: 0,
      };
    }
  },
  async create(body: {
    name: string;
    email: string;
    phone: string;
    company: string;
  }): Promise<Project> {
    try {
      const response = await api.post("/projects", body);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return {
        name: "",
        description: "",
        budget: 0,
        startDate: new Date(),
        endDate: new Date(),
        clientId: 0,
      };
    }
  },
  async update(
    id: number,
    body: { name: string; email: string; phone: string; company: string }
  ): Promise<Project> {
    try {
      const response = await api.put(`/projects/${id}`, body);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return {
        name: "",
        description: "",
        budget: 0,
        startDate: new Date(),
        endDate: new Date(),
        clientId: 0,
      };
    }
  },
  async delete(id: number): Promise<boolean> {
    try {
      await api.delete(`/projects/${id}`);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
