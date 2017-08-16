import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as _ from 'lodash';
import { fadeInAnimation } from "../../../route.animation";
import { MdSnackBar } from "@angular/material";
import { ProductPlan } from "../../models/product/product.plan.model";
import { ProductGeneral } from "../../models/product/product.general.model";
import { ProductDevice } from "../../models/product/product.device.model";
import { ProductPackage } from "../../models/product/product.package.model";
import createNumberMask from './number-mask/createNumberMask';


@Component({
  selector: 'app-claro-negotiation-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  //public mask1 =  [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  plan = new ProductPlan();
  general = new ProductGeneral();
  device = new ProductDevice();
  package = new ProductPackage();

  /** FormControllers */
  saleTypeCtrl: FormControl; // track value of input
  planNameCtrl: FormControl;
  paqNameCtrl: FormControl;
  devSourceCtrl: FormControl;
  devRefCtrl: FormControl;

  /** autocomplete variables */
  saleTypeAuto: any; // local template var of autocomplete panel instance
  namePlanAuto: any;
  paqNameAuto: any;
  devSourceAuto: any;
  devRefAuto: any;

  /** filtered sets */
  filteredSaleTypes: any; // observable with filtered options based on valueChanges event
  filteredPlanNames: any;
  filteredPaqNames: any;
  filteredDevSources: any;
  filteredDevRefs: any;

  private selectedIndexTabTwo = 0;
  position = 'before';
  public numberMask;

  constructor(private snackBar: MdSnackBar) {

    /* Text mask for currency */
    this.numberMask = createNumberMask({
      prefix: '$ ',
      suffix: '' // This will put the dollar sign at the end, with a space.
    });

    /** Inicialization of form controllers */
    this.saleTypeCtrl = new FormControl();
    this.planNameCtrl = new FormControl();
    this.paqNameCtrl = new FormControl();
    this.devSourceCtrl = new FormControl();
    this.devRefCtrl = new FormControl();

    /** Inicialization of filters */
    this.filteredPlanNames = this.planNameCtrl.valueChanges
      .startWith(this.planNameCtrl.value)
      .map(name => this.filter(name, this.planNames));

    this.filteredSaleTypes = this.saleTypeCtrl.valueChanges
      .startWith(this.saleTypeCtrl.value)
      .map(val => this.displayFn(val))
      .map(type => this.filter(type, this.saleTypes));

    this.filteredPaqNames = this.paqNameCtrl.valueChanges
      .startWith(this.paqNameCtrl.value)
      .map(name => this.filter(name, this.paqNames));

    this.filteredDevSources = this.devSourceCtrl.valueChanges
      .startWith(this.devSourceCtrl.value)
      .map(src => this.filter(src, this.devSources));

    this.filteredDevRefs = this.devRefCtrl.valueChanges
      .startWith(this.devRefCtrl.value)
      .map(ref => this.filter(ref, this.devRefs));

    this.device.reqPriceNoIva = this.device.discountRate ? (this.device.fullPriceNoIva * (this.device.discountRate / 100))
      : this.device.fullPriceNoIva;
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
    return (value && typeof value === 'object') ? value.name : value;
  }

  /** Filtra val en vals, si val null o no existe, retorna vals */
  filter(val: string, vals: any) {
    // si val=null o vacio (false) return vals, si true, retorna filter...
    // s guarda todos los elementos de vals; g: global; i:ignoreCase
    return val ? vals.filter(s => new RegExp(`^${val}`, 'gi').test(s.name))
      : vals;
  }

  getEscaped(text: string) {
    return _.escape(text);
  }

  /** Mirage Data */
  associateProducts = [
    { line: '01', plan: 'Plan 1', package: 'Paquete 1', device: 'Nexus', permanence: '12 meses' },
    { line: '02', plan: 'Plan 2', package: 'Paquete 2', device: 'Iphone', permanence: '12 meses' },
    { line: '03', plan: 'Plan 3', package: 'Paquete 3', device: 'Moto G5', permanence: '24 meses' }
  ];
  saleTypes = [
    { code: '01', name: 'Nuevo' },
    { code: '02', name: 'Redencion' },
    { code: '03', name: 'Adicion' },
    { code: '04', name: 'Otros' }
  ];
  planNames = [
    { name: 'Claro Corp  TD 3423 Ilim' },
    { name: 'Claro Corp  Int 2312 Ilim' },
    { name: '40 GB' },
    { name: 'Claro Corp Full HD' }
  ];
  paqNames = [
    { name: 'Pq Navegacion 10GB BB' },
    { name: 'Empremix' },
    { name: 'KitAmigo' },
    { name: 'Pq Navegacion 25GB WSP INF' }
  ];
  devSources = [
    { name: 'Comprado' },
    { name: 'Traido' }
  ];
  devRefs = [
    { name: 'Iphone SE Space Gray' },
    { name: 'Motorola G5 plus' },
    { name: 'Samsung J7 Huella' },
    { name: 'Motorola Z mods' },
    { name: 'Huawei P8' },
    { name: 'Motorola G5 plus' },
    { name: 'Samsung J10' }
  ];
}
