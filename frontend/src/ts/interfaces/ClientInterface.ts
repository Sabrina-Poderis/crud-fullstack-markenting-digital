import type ProjectInterface from "./ProjectInterface";

export default interface ClientInterface {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  projects?: ProjectInterface;
}
