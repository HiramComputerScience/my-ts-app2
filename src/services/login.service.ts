import axios from "axios";
import LoginRequest from "@/models/authentication/LoginRequest";

class LoginService {

  public postLogin(loginRequest: LoginRequest) {
    return axios.post("/login", loginRequest);
  }
}

export default new LoginService();