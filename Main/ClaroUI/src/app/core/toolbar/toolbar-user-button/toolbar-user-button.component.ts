import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "angular2-localstorage";
import { Router } from "@angular/router";
import { MdSnackBar } from "@angular/material";

@Component({
  selector: 'ms-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit {

  isOpen: boolean;
  user: string;

  constructor(private router: Router, private localStorageService: LocalStorageService, private snackBar: MdSnackBar) { }

  ngOnInit() {
    var userStorege = localStorage.getItem("userName");
    this.user = userStorege;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  CloseSession(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  help(): void {

    this.snackBar.open('Esta funcionalidad será activada próximamente.', 'Cerrar', {
      duration: 5000
    });
  }

}
