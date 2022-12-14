export default class User {
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: boolean;
    public userId!: string;
    constructor(
      firstName: string,
      lastName: string,
      email: string,
      password: boolean,
      userId: string
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.userId = userId;
    }
  }