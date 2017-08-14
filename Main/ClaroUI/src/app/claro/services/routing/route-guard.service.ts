import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from "angular2-localstorage";

@Injectable()
export class RouteGuard implements CanActivate {

    constructor(private router: Router, private localStorageService: LocalStorageService) {

    }

    canActivate(): boolean {
        var token = localStorage.getItem("token");
        var remember = localStorage.getItem("remember");
        if (token) {
            var getdate = new Date();
            var expires = new Date(localStorage.getItem("expires"));
            console.log(getdate);
            console.log(expires);
            if (getdate > expires) {
                this.router.navigate(['/login']);
                localStorage.clear();
                return false;
            } else {
                return true;
            }

        } else {
            localStorage.clear();
            this.router.navigate(['/login']);
            return false;
        }


    }

}