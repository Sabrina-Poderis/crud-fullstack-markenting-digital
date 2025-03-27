import ClientInterface from "../interfaces/ClientInterface";

type ClientUpdateRequest = Pick<ClientInterface, "name" | "phone" | "company">

export default ClientUpdateRequest