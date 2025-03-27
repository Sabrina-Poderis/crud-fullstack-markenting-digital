import { Project } from "../../models/Project";

export default interface ClientInterface {
    id: number;
    name: string;
    email: string;
    phone: string;
    company: string;
    deletedAt?: Date;
    projects?: Project
};