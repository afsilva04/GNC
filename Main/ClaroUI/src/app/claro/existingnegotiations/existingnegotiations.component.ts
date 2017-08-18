import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { InformationCustomer } from '../models/information/information.customer.model';

import { Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { LocalStorageService } from "angular2-localstorage";
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { MdDialogRef, MdDialog } from "@angular/material";
import { UserService } from "../services/user/user.service";
import { MdSnackBar } from "@angular/material";

@Component({
  selector: 'app-claro-existingnegotiations',
  templateUrl: './existingnegotiations.component.html',
  styleUrls: ['./existingnegotiations.component.scss',
    '../../../../node_modules/@swimlane/ngx-datatable/src/themes/material.scss'
  ]
})
export class ExistingnegotiationsComponent implements OnInit {

  customer = new InformationCustomer();
  rows = [];
  selected: any;
  columns = [
    { name: 'Id', prop: 'id' },
    { name: 'Id usuario', prop: 'idCustomer' },
    { name: 'Nombre', prop: 'name' },
    { name: 'Descripción', prop: 'description' },
    { name: 'Asignación Comercial', prop: 'commercialAssignment' }
  ];

  // Set our navigation extras object
  // that passes on our global query params and fragment

  /*  navigationExtras: NavigationExtras = {
     queryParamsHandling: 'preserve',
     'id': event.row.id;
   }; */


  constructor(private router: Router, private userService: UserService, private snackBar: MdSnackBar
    , private localStorageService: LocalStorageService, private slimLoadingBarService: SlimLoadingBarService) { }

  /* Se llama cuando se clickea una fila */
  onActivate(event) {

    if (event.type === 'dblclick') {
      console.log('navega a claro-negotiation');
      this.router.navigate(['/claro/negotiation', { id: event.row.id }]);
    }
  }

  ngOnInit() {
    this.getExitingNegotiations();
  }

  getExitingNegotiations() {

    this.loading(true);
    var resutl = this.userService.getExitingNegotiations()
      .subscribe(value => {
        this.rows = value;
        this.loading(false);
      },
      error => this.Error(error),
      () => console.log('complete'));
  }


  loading(load: boolean) {
    if (load) {
      this.slimLoadingBarService.start();
    } else {
      this.slimLoadingBarService.complete();
    }
  }

  private Complete(response: Response) {
    console.log(response);
    this.snackBar.open('Informacion registrada con exito.', 'Cerrar', {
      duration: 3000
    });
    this.loading(false);
  }

  private Error(error: Response) {
    this.loading(false);
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

}
