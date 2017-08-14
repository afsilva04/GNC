export class Register {
  Email: string;
  Password: string;
  ConfirmPassword: string;

  constructor(model: any = null) {
    if (model) {
      this.Email = model.Email;
      this.Password = model.Password;
      this.ConfirmPassword = model.ConfirmPassword;
    }
  }
}