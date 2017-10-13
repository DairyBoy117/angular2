import { Component, OnInit } from '@angular/core';
import { LogInService } from './../services/login.services';
import { Router } from '@angular/router';


@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

    public userChoice;

    constructor(private logInService:LogInService, private router:Router) { }

    public logIn() {
        this.logInService.logIn();
        window.location.hash = "";
    }

    public logOut() {
        this.logInService.logOut();
        console.log(this.router.url);
        if (this.router.url.includes('/room')) {
            this.router.navigateByUrl('/welcome');
        }
    }

    get username() {
        return this.logInService.getLoggedInUser();
    }

    ngOnInit() {
    }

}