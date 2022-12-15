import axios from "axios";
import UserDetailsRequest from "@/models/user/UserDetailsRequest";

class UserService {

  public postUser(userDetailsRequest: UserDetailsRequest) {
    return axios.post("/users", userDetailsRequest);
  }
}

export default new UserService();
