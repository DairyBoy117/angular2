import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'room',
    templateUrl: './room.html',
    styleUrls: ['./room.css']
})
export class RoomComponent implements OnInit {
    public roomId:string;

    constructor(private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        console.log("Component Init");

        this.activeRoute.paramMap.subscribe(route => {
            this.roomId = route.get('id');
        });

        /*this.activeRoute.params.subscribe(parameters => {
            console.log("params", parameters["id"]);
            this.id = parameters["id"];
        });*/
    }
}