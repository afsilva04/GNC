import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as _ from 'lodash';
import { fadeInAnimation } from "../../route.animation";
import { MdSnackBar } from "@angular/material";


@Component({
  selector: 'ms-negotiation',
  templateUrl: './negotiation.component.html',
  styleUrls: ['./negotiation.component.scss']
})
export class NegotiationComponent implements OnInit {

  constructor(private snackBar: MdSnackBar) { }

  public form = {
        name: '',
        hobbies: []
    };

  selectedIndex: number = 0;
  position = 'before';
  ngOnInit() {
  }

  nextStep() {
    this.selectedIndex += 1;
  }

  previousStep() {
    this.selectedIndex -= 1;
  }

  saveData() {
    this.snackBar.open('Datos registrados con exito.', 'Cerrar', {
      duration: 3000
    });
  }

}
