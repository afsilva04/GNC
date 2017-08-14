export class UserGeneralData {
  identification: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  cityBirth: string;
  sex: string;
  stratum: string;
  phone: string;
  cellphone: string;
  civilstatus: string;
  health: string;
  contact: string;
  numbercontact: string;
  livenumber: string;
  mothereducation: string;
  motheroccupation: string;
  fathereducation: string;
  fatheroccupation: string;
  cityResidence: string;
  constructor(model: any = null) {
    if (model) {
      this.identification = model.identification;
      this.firstname = model.firstname;
      this.lastname = model.lastnamev;
      this.birthdate = model.birthdate;
      this.cityBirth = model.cityBirth;
      this.sex = model.sex;
      this.stratum = model.stratum;
      this.phone = model.phone;
      this.cellphone = model.cellphone;
      this.civilstatus = model.civilstatus;
      this.health = model.health;
      this.contact = model.contact;
      this.numbercontact = model.numbercontact;
      this.livenumber = model.livenumber;
      this.mothereducation = model.mothereducation;
      this.motheroccupation = model.motheroccupation;
      this.fathereducation = model.fathereducation;
      this.fatheroccupation = model.fatheroccupation;
      this.cityResidence = model.cityResidence;
    }
  }
}