export class Login {
  email: string;
  password: string;
  grant_type: string;

  constructor(model: any = null) {
    if (model) {
      this.email = model.Email;
      this.password = model.Password;
      this.grant_type = model.grant_type;
    }
  }
}