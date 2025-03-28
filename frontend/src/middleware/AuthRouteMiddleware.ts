import { UserService } from "../services/UserService";

const AuthRouteMiddleware = (_to: any, _from: any, next: any) => {
  if (!UserService.isAuthenticated()) {
    next("/login");
  } else {
    next();
  }
};

export default AuthRouteMiddleware;
