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
    description: string;
    budget: number;
    startDate: Date;
    endDate: Date;
    clientId: number;
  }): Promise<boolean> {
    try {
      await api.post("/projects", body);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  async update(
    id: number,
    body: {
      name: string;
      description: string;
      budget: number;
      startDate: Date;
      endDate: Date;
      clientId: number;
    }
  ): Promise<boolean> {
    try {
      await api.put(`/projects/${id}`, body);
      return true
    } catch (error) {
      console.error(error);
      return false;
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
