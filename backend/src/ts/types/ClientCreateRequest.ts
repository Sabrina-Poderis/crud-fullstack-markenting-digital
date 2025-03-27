import ClientInterface from "../interfaces/ClientInterface";

type ClientCreateRequest = Pick<ClientInterface, "name" | "email" | "phone" | "company">

export default ClientCreateRequest