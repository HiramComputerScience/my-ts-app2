export default class LoginRequest {
    public email!: string;
    public password!: string;
    constructor(
      password: string,
      email: string,
    ) {
      this.email = email;
      this.password = password;
    }
  }