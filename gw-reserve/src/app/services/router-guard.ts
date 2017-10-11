import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LogInService} from './login.services';

@Injectable()

export class LogInRouterGuard implements CanActivate {
    constructor(private login: LogInService) { }

    canActivate() { //meant to return a boolean, if something calls this function, it will not allow that thing to continue if it gets a false
        return Boolean( this.login.getLoggedInUser() ); //checks if a user is logged in
    }
}