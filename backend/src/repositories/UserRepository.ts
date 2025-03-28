import { User } from "../models/User";
import bcrypt from "bcryptjs";
import UserCreateRequest from "../ts/types/UserCreateRequest";

export default class UserRepository {
  async create(data: UserCreateRequest): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await User.create({
      email: data.email,
      password: hashedPassword,
      name: data.name,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await User.findOne({ where: { email } });
  }
}
