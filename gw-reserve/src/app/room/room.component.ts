import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICanDeactivate } from './../services/can-deactivate-guard';

@Component({
    selector: 'room',
    templateUrl: './room.html',
    styleUrls: ['./room.css']
})
export class RoomComponent implements ICanDeactivate, OnInit {
    public id;
    public canThisDeactivate: boolean;

    constructor(private activeRoute: ActivatedRoute) {
        this.canThisDeactivate = true; //set the deactivate boolean to true by default
    }

    toggleCanDeactivate() { //runs when button is clicked and changes deactivate boolean
        this.canThisDeactivate = !this.canThisDeactivate;
    }

    canDeactivate() { //gets returns the deactivate boolean to can-deactivate-guard
        return this.canThisDeactivate;
    }

    ngOnInit() {
        console.log("Component Init");

        this.activeRoute.params.subscribe(parameters => {
            console.log("params", parameters["id"]);
            this.id = parameters["id"];
        });
    }
}