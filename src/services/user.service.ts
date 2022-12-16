import axios from "axios";
import UserDetailsRequest from "@/models/user/UserDetailsRequest";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'http://localhost:8085/';

class UserService {

  public postUser(userDetailsRequest: UserDetailsRequest) {
    return axios.post("/users", userDetailsRequest);
  }
}

export default new UserService();


