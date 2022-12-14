import axios, { AxiosResponse } from "axios";
import UserDetailsRequest from "@/models/user/UserDetailsRequest";
import UserDetailsResponse from "@/models/user/UserDetailsResponse";
import { LoginRequest, LoginResponse } from "@/models";

class UserService {

  public postUser(userDetailsRequest: UserDetailsRequest): Promise<AxiosResponse<UserDetailsResponse>> {
    const resp = axios.post("/users", userDetailsRequest);
    return resp;
  }
  public setUserFromLogin(loginRequest: LoginRequest, loginResponse:LoginResponse) {
    
  }
}

export default new UserService();
