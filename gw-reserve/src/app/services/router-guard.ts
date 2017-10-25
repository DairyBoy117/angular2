import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LogInService} from './login.services';

@Injectable()
export class LogInRouterGuard implements CanActivate {
	private _isUserLoggedIn: boolean;

	constructor(
		private _loginService: LogInService,
		private _router: Router
	) { }

	canActivate() {
		return this._loginService.getLoggedInUser().map(
			loggedInUser => {
				if (loggedInUser) return true;

				this._router.navigate(["welcome"], {
					fragment: "login-needed"
				});

				return false;
			}
		);
	}
}