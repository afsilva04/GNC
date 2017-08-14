import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as _ from 'lodash';
import { fadeInAnimation } from "../../../route.animation";
import { MdSnackBar } from "@angular/material";

import { InformationCustomer } from "../../models/information/information.customer.model";
import { InformationDates } from "../../models/information/information.dates.model";
import { InformationSalesCycle } from "../../models/information/information.salesCycle.model";

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


  private selectedIndexTabOne: number = 0;
  private selectedIndexTabTwo: number = 0;
  position = 'before';


  constructor(private snackBar: MdSnackBar) {

    this.customerCtrl = new FormControl({ code: '', name: '' });
    this.reactiveCustomers = this.customerCtrl.valueChanges
      .startWith(this.customerCtrl.value)
      .map(val => this.displayFn(val))
      .map(name => this.filterCustomers(name));
    this.selectedIndexTabOne = 0;
    this.selectedIndexTabTwo = 0;
  }

  ngOnInit() {
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


}
