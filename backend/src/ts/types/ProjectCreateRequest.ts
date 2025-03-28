import ProjectInterface from "../interfaces/ProjectInterface";

type ProjectCreateRequest = Omit<ProjectInterface, "id" | "client" | "deletedAt">

export default ProjectCreateRequest