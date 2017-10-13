import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LogInService} from './login.services';

@Injectable()

export class LogInRouterGuard implements CanActivate {
    constructor(private login: LogInService, private router: Router) { }

    canActivate() { //meant to return a boolean, if something calls this function, it will not allow that thing to continue if it gets a false
        if (this.login.getLoggedInUser()) { //checks if a user is logged in
            return true;
        } else {
            this.router.navigateByUrl('welcome');
            return false;
        }; 

    }
}