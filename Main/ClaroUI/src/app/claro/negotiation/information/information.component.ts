import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as _ from 'lodash';
import { fadeInAnimation } from "../../../route.animation";
import { MdSnackBar } from "@angular/material";

import { Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { LocalStorageService } from "angular2-localstorage";
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { MdDialogRef, MdDialog } from "@angular/material";
import { UserService } from "../../services/user/user.service";


import { InformationCustomer } from "../../models/information/information.customer.model";
import { InformationDates } from "../../models/information/information.dates.model";
import { InformationSalesCycle } from "../../models/information/information.salesCycle.model";
import { InformationPreviousNegotiation } from "../../models/information/information.PreviousNegotiation.model";
import { InformationNegotiationIndicators } from "../../models/information/information.negotiationIndicators.model";
import { InformationOther } from "../../models/information/information.other.model";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'ms-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [fadeInAnimation]
})
export class InformationComponent implements OnInit {

  reactiveAuto: any;
  customerCtrl: FormControl;
  reactiveCustomers: any;

  customer = new InformationCustomer();
  dates = new InformationDates();
  salesCycle = new InformationSalesCycle();
  previousNegotiation = new InformationPreviousNegotiation();
  negotiationIndicators = new InformationNegotiationIndicators();
  other = new InformationOther();


  private selectedIndexTabOne: number = 0;
  private selectedIndexTabTwo: number = 0;
  position = 'before';


  constructor(private userService: UserService, private snackBar: MdSnackBar
    , private localStorageService: LocalStorageService, private slimLoadingBarService: SlimLoadingBarService,
    private route: ActivatedRoute,
    private router: Router) {

    this.customerCtrl = new FormControl({ code: '', name: '' });
    this.reactiveCustomers = this.customerCtrl.valueChanges
      .startWith(this.customerCtrl.value)
      .map(val => this.displayFn(val))
      .map(name => this.filterCustomers(name));
    this.selectedIndexTabOne = 0;
    this.selectedIndexTabTwo = 0;
  }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.userService.getExisitingNegotiation(params.get('id')))
    .subscribe((user: InformationCustomer) => this.customer = user);
  }

  nextStep() {
    this.selectedIndexTabOne += 1;
    this.selectedIndexTabTwo += 1;
  }

  previousStep() {
    this.selectedIndexTabOne -= 1;
    this.selectedIndexTabTwo -= 1;
  }

  saveData() {
    this.snackBar.open('Datos registrados con exito.', 'Cerrar', {
      duration: 3000
    });
  }

  //autocomplete customers 

  displayFn(value: any): string {
    return value && typeof value === 'object' ? value.name : value;
  }

  filterCustomers(val: string) {
    return val ? this.customers.filter(s => new RegExp(`^${val}`, 'gi').test(s.name))
      : this.customers;
  }

  getEscaped(text: string) {
    return _.escape(text);
  }

  customers = [
    { code: '01', name: 'Cliente 1' },
    { code: '02', name: 'Cliente 1' },
  ];

  saveCustomerInformation() {
    this.loading(true);

    var resutlLogin = this.userService.insertCustomerInformation(this.customer)
      .subscribe(value => {

        this.Complete(value)

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
