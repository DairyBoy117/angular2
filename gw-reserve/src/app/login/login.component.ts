import { Component, OnInit } from '@angular/core';
import { LogInService } from './../services/login.services';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

    public userChoice;

    constructor(private logInService:LogInService) { }

    public logIn() {
        this.logInService.logIn();
    }

    public logOut() {
        this.logInService.logOut();
    }

    get username() {
        return this.logInService.getLoggedInUser();
    }

    ngOnInit() {
    }

}