import { Component, OnInit, Input } from '@angular/core';
import { IReservation } from './../../interfaces/IReservation';
import { RoomService } from './../../services/room.service';

@Component({
    selector: 'gw-room-form',
    templateUrl: './room-form.component.html',
    styleUrls: ['./room-form.component.css']
})

export class RoomFormComponent implements OnInit {

    constructor(private _roomService:RoomService){}

    @Input()
    public roomId:string;

    public options:string[];

    ngOnInit(){
        this.options = [
            "Client Meeting",
            "Job Interview",
            "SCRUM Meeting",
            "SCRUM Beating"
        ];
    }

    submitForm(formValues) {
        const reservation:IReservation = {
            email: formValues.myEmailInput,
            reason: formValues.reserveReason,
            endDateTime: formValues.endDateTime,
            startDateTime: formValues.startDateTime
        }
        console.log(reservation);
        //this._roomService.addReservation(roomId, reservation);
    }
}