import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as _ from 'lodash';
import { fadeInAnimation } from "../../route.animation";
import { MdSnackBar } from "@angular/material";
import { UserGeneralData } from "../models/user/user.generalData.model";
import { UserHealthHistory } from "../models/user/user.healthHistory.model";
import { UserAtPesentYou } from "../models/user/user.atPesentYou.model";
import { UserLifestyle } from "../models/user/user.lifestyle.model";

@Component({
  selector: 'ms-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [fadeInAnimation]
})
export class UserdataComponent implements OnInit {

  constructor(private snackBar: MdSnackBar) {
    this.stateCtrl = new FormControl({ code: '', name: '' });
    this.reactiveStates = this.stateCtrl.valueChanges
      .startWith(this.stateCtrl.value)
      .map(val => this.displayFn(val))
      .map(name => this.filterStates(name));

  }

  dataGeneral = new UserGeneralData();
  healthHistory = new UserHealthHistory();
  atPesentYou = new UserAtPesentYou();
  lifestyle = new UserLifestyle();

  position = 'before';

  selectedIndex: number = 0;

  reactiveAuto: any;
  stateCtrl: FormControl;
  reactiveStates: any;

  states = [
    { code: 'AL', name: 'Alabama' },
    { code: 'AK', name: 'Alaska' },
    { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' },
    { code: 'CA', name: 'California' },
    { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' },
    { code: 'DE', name: 'Delaware' },
    { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' },
    { code: 'HI', name: 'Hawaii' },
    { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' },
    { code: 'IN', name: 'Indiana' },
    { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' },
    { code: 'KY', name: 'Kentucky' },
    { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' },
    { code: 'MD', name: 'Maryland' },
    { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' },
    { code: 'MN', name: 'Minnesota' },
    { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' },
    { code: 'MT', name: 'Montana' },
    { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' },
    { code: 'NH', name: 'New Hampshire' },
    { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' },
    { code: 'NY', name: 'New York' },
    { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' },
    { code: 'OH', name: 'Ohio' },
    { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' },
    { code: 'PA', name: 'Pennsylvania' },
    { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' },
    { code: 'SD', name: 'South Dakota' },
    { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' },
    { code: 'UT', name: 'Utah' },
    { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' },
    { code: 'WA', name: 'Washington' },
    { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' },
    { code: 'WY', name: 'Wyoming' },
  ];

  currentState = '';

  sexs = [
    { value: 'Mujer', viewValue: 'Mujer' },
    { value: 'Hombre', viewValue: 'Hombre' }
  ];

  stratums = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' }
  ];


  days = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' }
  ];

  healths = [
    { value: 'Contributivo (beneficiario o cotizante)', viewValue: 'Contributivo (beneficiario o cotizante)' },
    { value: 'Subsidiado', viewValue: 'Subsidiado' },
    { value: 'No afiliado', viewValue: 'No afiliado' }
  ];

  civilstatuslist = [
    { value: 'Soltero', viewValue: 'Soltero' },
    { value: 'Casado/Unión libre', viewValue: 'Casado/Unión libre' },
    { value: 'Separado/Divorciado', viewValue: 'Separado/Divorciado' },
    { value: 'Viudo', viewValue: 'Viudo' }
  ];

  educations = [
    { value: 'Ninguno', viewValue: 'Ninguno' },
    { value: 'Primaria', viewValue: 'Primaria' },
    { value: 'Secundaria', viewValue: 'Secundaria' },
    { value: 'Técnico/Tecnólogo', viewValue: 'Técnico/Tecnólogo' },
    { value: 'Pregrado', viewValue: 'Pregrado' },
    { value: 'Posgrado', viewValue: 'Posgrado' },
    { value: 'No aplica', viewValue: 'No aplica' },
  ];


  yesornot = [
    { value: 'Si', viewValue: 'Si' },
    { value: 'No', viewValue: 'No' },
  ];

  leisure = [
    { viewValue: 'Nunca', value: '0' },
    { viewValue: 'Alguna vez al mes', value: '1' },
    { viewValue: 'Alguna vez a la semana', value: '2' },
    { viewValue: 'Todos los días', value: '3' }
  ];


  sleepPractices = [
    { viewValue: 'Nunca', value: '0' },
    { viewValue: 'Algunas veces', value: '1' },
    { viewValue: 'Frecuentemente', value: '2' },
    { viewValue: 'Siempre', value: '3' }
  ];

  ngOnInit() {
    this.healthHistory.familyOthercheck = false;
    this.healthHistory.personalOthercheck = false;
    this.atPesentYou.formulatedDrugs = false;
    this.atPesentYou.supplements = false;
    this.atPesentYou.anotherSupplement = false;
    this.lifestyle.physicalActivity = false;
  }
  nextStep() {
    this.selectedIndex += 1;
  }

  previousStep() {
    this.selectedIndex -= 1;
  }

  getEscaped(text: string) {
    return _.escape(text);
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s.name))
      : this.states;
  }

  displayFn(value: any): string {
    return value && typeof value === 'object' ? value.name : value;
  }

  saveData() {
    this.snackBar.open('Datos registrados con exito.', 'Cerrar', {
      duration: 3000
    });
  }


}
