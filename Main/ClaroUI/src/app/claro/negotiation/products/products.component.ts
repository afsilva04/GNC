import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as _ from 'lodash';
import { fadeInAnimation } from "../../../route.animation";
import { MdSnackBar } from "@angular/material";
import { ProductPlan } from "../../models/product/product.plan.model";
import { ProductGeneral } from "../../models/product/product.general.model";
import { ProductDevice } from "../../models/product/product.device.model";
import { ProductPackage } from "../../models/product/product.package.model";

@Component({
  selector: 'app-claro-negotiation-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  plan = new ProductPlan();
  general = new ProductGeneral();
  device = new ProductDevice();
  package = new ProductPackage();

  planAuto: any; // local template var of autocomplete panel instance
  planCtrl: FormControl; // track value of input
  filteredPlans: any; // observable with filtered options based on valueChanges event

  namePlanAuto: any;
  planNameCtrl: FormControl;
  filteredPlanNames: any;

  private selectedIndexTabTwo = 0;
  position = 'before';
  associateProducts = [
    { line: '01', plan: 'Plan 1', package: 'Paquete 1', device: 'Nexus', permanence: '12 meses' },
    { line: '02', plan: 'Plan 2', package: 'Paquete 2', device: 'Iphone', permanence: '12 meses' },
    { line: '03', plan: 'Plan 3', package: 'Paquete 3', device: 'Moto G5', permanence: '24 meses' }
  ];
  typePlans = [
    { code: '01', name: 'Plan 1' },
    { code: '02', name: 'Plan 2' },
  ];
  planNames = [
    { name: 'Claro Corp  TD 3150 Ilim' },
    { name: 'Claro Corp  TD 3423 Ilim' },
    { name: 'Claro Corp  Int 2312 Ilim' },
    { name: '40 GB' },
    { name: 'Claro Corp Full HD' }
  ]


  constructor(private snackBar: MdSnackBar) {
    this.planCtrl = new FormControl();
    this.planNameCtrl = new FormControl();
    this.filteredPlanNames = this.planNameCtrl.valueChanges
      .startWith(this.planNameCtrl.value)
      .map(name => this.filterPlanNames(name));
    this.filteredPlans = this.planCtrl.valueChanges
      .startWith(this.planCtrl.value)
      .map(val => this.displayFn(val))
      .map(name => this.filterPlans(name));
  }

  filterPlanNames(val: string) {
    return val ? this.planNames.filter(s => new RegExp(`^${val}`, 'gi').test(s.name))
      : this.planNames;
  }

  ngOnInit() {
  }

  nextStep() {
    this.selectedIndexTabTwo += 1;
  }

  previousStep() {
    this.selectedIndexTabTwo -= 1;
  }

  saveData() {
    this.snackBar.open('Datos registrados con exito.', 'Cerrar', {
      duration: 3000
    });
  }

  //autocomplete plans 
  //to setting separate control and display value
  displayFn(value: any): string {
    return value && typeof value === 'object' ? value.name : value;
  }

  filterPlans(val: string) {
    return val ? this.typePlans.filter(s => new RegExp(`^${val}`, 'gi').test(s.name))
      : this.typePlans;
  }

  getEscaped(text: string) {
    return _.escape(text);
  }




}
