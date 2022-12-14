export default class UserDetails {
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public userId!: string;
    constructor(
      firstName: string,
      lastName: string,
      email: string,
      userId: string
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.userId = userId;
    }
  }