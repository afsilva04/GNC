export class User {
  firstName: string;
  lastName: string;

  constructor(model: any = null) {
    if (model) {
      this.firstName = model.firstName;
      this.lastName = model.lastName;
    }
  }
}