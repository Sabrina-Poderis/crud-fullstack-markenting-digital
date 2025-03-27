import UserInterface from "../interfaces/UserInterface";

type UserCreateResponse = Omit<UserInterface, "password">

export default UserCreateResponse