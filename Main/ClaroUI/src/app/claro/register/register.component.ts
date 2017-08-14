import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from "../../route.animation";
import { Router } from "@angular/router";
import { UserService } from "../services/user/user.service";
import { Register } from "../models/register/register.model";

import { Response } from '@angular/http'; 
import { Observable } from 'rxjs/observable';
import { LocalStorageService } from "angular2-localstorage";
import { MdSnackBar } from "@angular/material";
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { MdDialogRef, MdDialog } from "@angular/material";

@Component({
  selector: 'ms-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [fadeInAnimation]
})
export class RegisterComponent implements OnInit {


  Email: string;
  Password: string;
  ConfirmPassword: string;

  constructor(
    private router: Router, private userService: UserService, private snackBar: MdSnackBar
    , private localStorageService: LocalStorageService, private slimLoadingBarService: SlimLoadingBarService
    , public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  register() {
    this.slimLoadingBarService.start();
    var registerUser = new Register();
    registerUser.Email = this.Email;
    registerUser.Password = this.Password;
    registerUser.ConfirmPassword = this.ConfirmPassword;

    this.userService.createNewUser(registerUser);
    var resutlLogin = this.userService.createNewUser(registerUser)
      .subscribe(value => {

        this.CompleteRegister(value)

      },
      error => this.ErrorRegister(error),
      () => console.log('complete'));

  }

  private CompleteRegister(response: Response) {
    console.log(response);

    var objLogin = [];
    for (var key in response) {
      if (response.hasOwnProperty(key)) {
        objLogin.push({ key: key, val: response[key] });
      }
    }
    console.log(objLogin);
    this.snackBar.open('Usuario registrado con exito.', 'Cerrar', {
      duration: 3000
    });
    this.slimLoadingBarService.complete();
    this.router.navigate(['/login']);
  }

  private ErrorRegister(error: Response) {
    this.slimLoadingBarService.complete();
    console.log(error);
    if (error.status === 400) {
      var errorjson = error.json();

      var objLogin = [];
      for (var key in errorjson) {
        if (errorjson.hasOwnProperty(key)) {
          objLogin.push({ key: key, val: errorjson[key] });
        }
      }
      console.log(objLogin);

      this.snackBar.open(objLogin[0].val, 'Cerrar', {
        duration: 5000
      });
    }
  }

  dialogRef: MdDialogRef<DialogTerms>;
  result: string;
  openDialogTerms() {
    this.dialogRef = this.dialog.open(DialogTerms, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.result = result;
      this.dialogRef = null;
    });
  }
}

@Component({
  selector: 'dialog-terms',
  templateUrl: './terms.component.html',
})
export class DialogTerms {
  constructor(public dialogRef: MdDialogRef<DialogTerms>) { }
}
