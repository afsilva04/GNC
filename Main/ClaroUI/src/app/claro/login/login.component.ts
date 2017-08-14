import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { fadeInAnimation } from "../../route.animation";
import { UserService } from "../services/user/user.service";
import { Login } from "../models/login/login.model";
import { ILogin } from "../models/login/login.interface";
import { MdSnackBar } from "@angular/material";
import { routeAnimation } from "../../route.animation";
import { Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { LocalStorageService } from "angular2-localstorage";
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [fadeInAnimation]
})
export class LoginComponent implements OnInit {

  Email: string;
  Password: string;
  Remember: boolean;

  constructor(
    private router: Router, private userService: UserService, private snackBar: MdSnackBar
    , private localStorageService: LocalStorageService, private slimLoadingBarService: SlimLoadingBarService
  ) { }

  ngOnInit() {
    var remember = (localStorage.getItem("remember") === 'true');
    if (remember) {
      this.router.navigate(['/claro/negotiation']);
    }
    console.log(remember);
  }

  private obser: Observable<any>;
  errorMessage: string;
  private response: Response;
  _login: ILogin[];

  login(): void {
    this.slimLoadingBarService.start();

    var login = new Login();
    login.email = this.Email;
    login.password = this.Password;

    var resutlLogin = this.userService.login(login)
      .subscribe(value => {
        this._login = value;
        this.CompleteLogin(this._login)
      },
      error => this.ErrorLogin(error),
      () => console.log('complete'));
  }

  private CompleteLogin(response: ILogin[]) {
    var objLogin = [];
    for (var key in response) {
      if (response.hasOwnProperty(key)) {
        objLogin.push({ key: key, val: response[key] });
      }
    }

    localStorage.setItem("token", objLogin[0].val);
    localStorage.setItem("userName", objLogin[3].val);
    localStorage.setItem("expires", objLogin[5].val);
    if (this.Remember) {
      localStorage.setItem("remember", String(this.Remember));
    }
    this.slimLoadingBarService.complete();
    this.router.navigate(['/claro/negotiation']);
  }

  private ErrorLogin(error: Response) {
    this.slimLoadingBarService.complete();
    console.log(error);
    if (error.status === 400) {
      this.snackBar.open('Usuario o contraseña incorrectos, por favor intente de nuevo', 'Cerrar', {
        duration: 5000
      });
    } else if (error.status === 0) {
      this.snackBar.open("Error de conección con el servicio de autenticación, comuniquece con el administrador", 'Cerrar', {
        duration: 5000
      });
    }
  }

}
