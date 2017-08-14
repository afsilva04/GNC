import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../route.animation";
import {Router} from "@angular/router";
import { MdSnackBar } from "@angular/material";

@Component({
  selector: 'ms-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class ForgotPasswordComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private router: Router, private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
  }

  send() {
     this.snackBar.open('Esta funcionalidad será activada próximamente.', 'Cerrar', {
        duration: 5000
      });
  }

}
