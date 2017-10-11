import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LogInService} from './login.services';

@Injectable()

export class LogInRouterGuard implements CanActivate {
    constructor(private login: LogInService) { }

    canActivate() { //activates the isLoggedIn function
        return this.login.isLoggedIn();
    }
}