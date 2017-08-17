import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InformationCustomer } from '../models/information/information.customer.model';

@Component({
  selector: 'app-claro-existingnegotiations',
  templateUrl: './existingnegotiations.component.html',
  styleUrls: ['./existingnegotiations.component.scss',
  '../../../../node_modules/@swimlane/ngx-datatable/src/themes/material.scss'
]
})
export class ExistingnegotiationsComponent implements OnInit {

  general = new InformationCustomer();
  rows = [
    {
      type: 'Grupo', nombre: 'Grupo Corona', descripcion: 'FF Junio 2017',
      creacion: '26 de junio 2017', consultor: 'Samuel Ayala', estado: 'Abierto'
    },
    {
      type: 'Cliente', nombre: 'Servientrega', descripcion: 'FF Marzo 2014',
      creacion: '20 de Marzo 2014', consultor: 'Samuel Ayala', estado: 'Aprobado'
    },
    {
      type: 'Grupo', nombre: 'Bayer', descripcion: 'FF Abril 2017',
      creacion: '26 de Abril 2017', consultor: 'Samuel Ayala', estado: 'Rechazado'
    }
  ];
  columns = [
    { name: 'Tipo', prop: 'type'},
    { name: 'Nombre' },
    { name: 'Descripcion' },
    { name: 'Creacion' },
    { name: 'Consultor' },
    { name: 'Estado' }
  ];

  constructor(private router: Router) { }

  /* Se llama cuando se clickea una fila */
  onActivate(event){
    if(event.type === 'dblclick'){
      console.log("navega a claro-negotiation")
      this.router.navigate(['claro/negotiation']);
    }
  }

  ngOnInit() {
  }

  clientes = [
    { name: 'Claro Corp  TD 3423 Ilim' },
    { name: 'Claro Corp  Int 2312 Ilim' },
    { name: '40 GB' },
    { name: 'Claro Corp Full HD' }
  ];

}
