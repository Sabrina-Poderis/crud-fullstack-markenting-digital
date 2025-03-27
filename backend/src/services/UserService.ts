import { User } from "../models/User";
import bcrypt from 'bcryptjs';

type CreateUserRequest = {
    name: string
    email: string
    password: string
}

export default class UserService {
    async create (data: CreateUserRequest){
        const hashedPassword = await bcrypt.hash(data.password, 10);

        return await User.create({ email: data.email, password: hashedPassword, name: data.name })
    }

    async findByEmail(email: string) {
        return await User.findOne({ where: { email } })
    }
}