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

    public isLoggedIn() { //checks if the user is logged in, returns true or false
        console.log("Route guard is logged is checking...");
        if (!this._loggedInUser) {
            console.log("RouterGuard passes false");
            return false;
        } else {
            console.log("RouterGuard passes true");
            return true;
        }
    }
}