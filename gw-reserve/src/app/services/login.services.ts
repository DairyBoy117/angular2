import { Injectable } from "@angular/core";

@Injectable()
export class LogInService {
    private _loggedInUser;

    constructor() {
        this._loggedInUser = null;
    }

    public logIn() {
        this._loggedInUser = {
            name: "Austin Verburg"
        };
    }

    public logOut() {
        this._loggedInUser = null;
    }

    public getLoggedInUser() {
        //give the caller of this method a copy of logged in user
        return this._loggedInUser ? (<any>Object).assign({}, this._loggedInUser) : null;
    }
}