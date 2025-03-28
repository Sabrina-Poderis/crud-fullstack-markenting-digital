import type ClientInterface from "../interfaces/ClientInterface";

type Clients = Omit<ClientInterface, "projects">;
type Client = Omit<ClientInterface, "id">;

export type { Clients, Client };
