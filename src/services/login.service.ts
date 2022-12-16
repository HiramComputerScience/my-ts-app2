import axios from "axios";
import LoginRequest from "@/models/authentication/LoginRequest";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'http://localhost:8085/';

class LoginService {

  public postLogin(loginRequest: LoginRequest) {
    return axios.post("/login", loginRequest);
  }
}

export default new LoginService();