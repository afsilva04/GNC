import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as _ from 'lodash';
import { fadeInAnimation } from "../../../route.animation";
import { MdSnackBar } from "@angular/material";

@Component({
  selector: 'ms-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private selectedIndexTabOne: number = 0;
  private selectedIndexTabTwo: number = 0;
  position = 'before';

  constructor(private snackBar: MdSnackBar) { }

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

}
