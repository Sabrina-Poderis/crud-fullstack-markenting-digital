import { User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserInterface from "../ts/interfaces/UserInterface";
import env from "../config/env";

type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
};

export default class UserService {
  async create(data: CreateUserRequest) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await User.create({
      email: data.email,
      password: hashedPassword,
      name: data.name,
    });
  }

  async findByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }

  async comparePassword(password: string, userPassword: string) {
    return await bcrypt.compare(password, userPassword);
  }

  async generateToken(user: UserInterface) {
    return await jwt.sign({ id: user.id, email: user.email }, env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
  }
}
