import type ClientInterface from "./ClientInterface";

export default interface ProjectInterface {
  id: number;
  name: string;
  description: string;
  budget: number;
  startDate: Date;
  endDate: Date;
  clientId: number;
  client?: ClientInterface;
}
