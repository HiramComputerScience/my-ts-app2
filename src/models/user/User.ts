export default class User {
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public userId!: string;
    constructor(
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      userId: string
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.userId = userId;
    }
  }