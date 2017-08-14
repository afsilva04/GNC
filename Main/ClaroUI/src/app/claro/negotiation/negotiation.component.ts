import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as _ from 'lodash';
import { fadeInAnimation } from "../../route.animation";
import { MdSnackBar } from "@angular/material";



@Component({
  selector: 'ms-negotiation',
  templateUrl: './negotiation.component.html',
  styleUrls: ['./negotiation.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [fadeInAnimation]
})
export class NegotiationComponent implements OnInit {


  constructor() {
  }
  ngOnInit() {

  }


}
