import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'whatever-app',
    templateUrl: './whatever.html'
    //styleUrls: ['./.css']
})
export class WhateverComponent implements OnInit {
    public id;

    constructor(
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        console.log("Component Init");

        //do this when you know the user won't change your url
       /* console.log("Snapshot", this.activeRoute.snapshot.paramMap.get("id"));

        //new way
        this.activeRoute.paramMap.subscribe((parameters: ParamMap) => {
            console.log(parameters.get("id"));
        });*/

        //old way
        // this runs once to subscribe to an observer angular maintains for us
        this.activeRoute.params.subscribe(parameters => {
            // this runs every time the subscription updates
            console.log("params", parameters["id"]);
            this.id = parameters["id"];
        });
    }
}