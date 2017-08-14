import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { BaseService } from "../base.service";
import { environment } from "../../variables/variables.base";
import { Register } from "../../models/register/register.model";
import { Login } from "../../models/login/login.model";
import { ILogin } from "../../models/login/login.interface";
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService extends BaseService {
  model: any;
  modelName = 'user';

  constructor( @Inject(Http) http: Http) {
    super(http);
    // this.model = (construct: any) => {
    //   return new User(construct);
    // };

  }

  createNewUser(model: any) {
    let url = environment.API_BASE_URL + '/api/Account/Register';

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    var register = new Register();
    register.Email = model.Email;
    register.Password = model.Password;
    register.ConfirmPassword = model.ConfirmPassword;

    return this.http.post(url, JSON.stringify(register), { headers: headers })
      .map((response: Response) => <Response>response)

    //  var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');

    // let urlSearchParams = new URLSearchParams();
    // urlSearchParams.append('Email', model.Email);
    // urlSearchParams.append('Password', model.Password);
    // urlSearchParams.append('ConfirmPassword', model.ConfirmPassword);
    // let body = urlSearchParams.toString();
    // let options = new RequestOptions({ headers: headers });

    // console.log(urlSearchParams);

    // return this.http.post(url, body, options)
    //   .map((response: Response) => <Response>response)

  }

  login(model: any): Observable<ILogin[]> {

    let url = environment.API_BASE_URL + '/token';

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers.append('Accept', 'application/x-www-form-urlencoded');


    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('UserName', model.email);
    urlSearchParams.append('Password', model.password);
    urlSearchParams.append('grant_type', 'password');
    let body = urlSearchParams.toString();
    let options = new RequestOptions({ headers: headers });

    console.log(urlSearchParams);

    return this.http.post(url, body, options)
      .map((response: Response) => <ILogin[]>response.json())

  }



}