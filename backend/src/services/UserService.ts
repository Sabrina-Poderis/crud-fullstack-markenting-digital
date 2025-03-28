import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserInterface from "../ts/interfaces/UserInterface";
import env from "../config/env";
import UserRepository from "../repositories/UserRepository";
import ApiResponseInterface from "../ts/interfaces/ApiResponseInterface";
import UserResponse from "../ts/types/UserResponse";
import ResponseMessages from "../ts/enum/ResponseMessages";
import UserCreateRequest from "../ts/types/UserCreateRequest";
import UserLoginRequest from "../ts/types/UserLoginRequest";
export default class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async login(
    data: UserLoginRequest
  ): Promise<ApiResponseInterface<UserResponse>> {
    try {
      const user = await this.userRepository.findByEmail(data.email);

      if (!user) {
        return {
          status: 404,
          message: ResponseMessages.USER_NOT_FOUNDED,
        };
      }

      const isPasswordValid = await this.comparePassword(
        data.password,
        user.password
      );

      if (isPasswordValid) {
        return {
          status: 200,
          data: { token: await this.generateToken(user) },
        };
      } else {
        return {
          status: 400,
          message: ResponseMessages.WRONG_PASSWORD,
        };
      }
    } catch (error) {
      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async register(data: UserCreateRequest): Promise<ApiResponseInterface<UserResponse>> {
    try {
      if (await this.userRepository.findByEmail(data.email)) {
        return {
          status: 400,
          message: ResponseMessages.USER_ALREADY_EXISTS,
        };
      }

      const user = await this.userRepository.create(data);

      if (user) {
        return {
          status: 201,
          data: { token: await this.generateToken(user) },
          message: ResponseMessages.USER_CREATED,
        };
      }

      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    } catch (error) {
      return {
        status: 500,
        message: ResponseMessages.INTERNAL_SERVER_ERROR,
      };
    }
  }

  private async comparePassword(password: string, userPassword: string) {
    return await bcrypt.compare(password, userPassword);
  }

  private async generateToken(user: UserInterface) {
    return await jwt.sign(
      { id: user.id, email: user.email },
      env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
  }
}
