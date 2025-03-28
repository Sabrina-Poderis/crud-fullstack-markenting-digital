import type ProjectInterface from "../interfaces/ProjectInterface";

type Projects = Omit<ProjectInterface, "client">;
type Project = Omit<ProjectInterface, "id" | "client">;

export type { Projects, Project };
