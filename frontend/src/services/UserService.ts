import { jwtDecode } from "jwt-decode";
import api from "./api";

interface DecodedToken {
  id: number;
  name: string;
  email: string;
  exp: number;
}

export const UserService = {
  async register(body: { name: string; email: string; password: string }): Promise<boolean> {
    try {
      const response = await api.post("/user/register", body);
      const token = response.data.data.token;
      localStorage.setItem("authorization", token);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  async login(body: { email: string; password: string }): Promise<boolean> {
    try {
      const response = await api.post("/user/login", body);
      const token = response.data.data.token;

      localStorage.setItem("authorization", token);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  logout() {
    localStorage.removeItem("authorization");
  },

  getUser() {
    const token = localStorage.getItem("authorization");
    if (!token) return null;

    try {
      const decoded: DecodedToken = jwtDecode(token);
      return {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
        exp: decoded.exp,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  isAuthenticated() {
    return localStorage.getItem("authorization") !== null;
  },

  isTokenExpired(){
    try {
      const token = this.getUser()
  
      // Verifica se o token está expirado
      if (!token || token.exp * 1000 < Date.now()) {
        this.logout();
        return true
      }
  
      return false
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      this.logout();
      return true
    }
  }
};
