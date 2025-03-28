import { authService } from "../services/authService";

const AuthRouteMiddleware = (_to: any, _from: any, next: any) => {
  if (!authService.isAuthenticated()) {
    next("/login");
  } else {
    next();
  }
}

export default AuthRouteMiddleware