import UserDetails from "../user/UserDetails";

export default class LoginResponse {
    public userDetails!: UserDetails;
    public isPasswordCorrect!: boolean;
    constructor(
      userDetails: UserDetails,
      isPasswordCorrect: boolean,
    ) {
        this.userDetails = userDetails,
        this.isPasswordCorrect = isPasswordCorrect
    }
  }