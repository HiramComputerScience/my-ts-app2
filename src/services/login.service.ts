import axios, { AxiosResponse } from "axios";
import LoginRequest from "@/models/authentication/LoginRequest";
import LoginResponse from "@/models/authentication/LoginResponse";
import UserService from "@/services/user.service";

class LoginService {

  public async postLogin(loginRequest: LoginRequest): Promise<AxiosResponse<LoginResponse>> {

        const resp = await axios.post("/login", loginRequest);
        const loginResponse : LoginResponse = resp.data;
        UserService.setUserFromLogin(loginRequest, loginResponse);

    return resp.data;
  }
}

export default new LoginService();