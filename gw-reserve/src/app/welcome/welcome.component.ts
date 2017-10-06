import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'welcome',
    templateUrl: './welcome.html',
    styleUrls: ['./welcome.css']
})
export class WelcomeComponent implements OnInit {
    public id;

    constructor(
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        console.log("Component Init");

        this.activeRoute.params.subscribe(parameters => {
            console.log("params", parameters["id"]);
            this.id = parameters["id"];
        });
    }
}