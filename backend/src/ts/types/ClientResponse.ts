import ClientInterface from "../interfaces/ClientInterface";

type ClientResponse = Omit<ClientInterface, "deletedAt">

export default ClientResponse