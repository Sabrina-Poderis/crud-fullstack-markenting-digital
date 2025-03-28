import UserInterface from "../interfaces/UserInterface";

type UserCreateRequest = Pick<UserInterface, "name" | "email"| "password">

export default UserCreateRequest