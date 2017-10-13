import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'welcome',
    templateUrl: './welcome.html',
    styleUrls: ['./welcome.css']
})
export class WelcomeComponent implements OnInit {
    public isShowingLoginWarning;

    constructor(
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activeRoute.fragment.subscribe(data => {
            this.isShowingLoginWarning = data;
        });
    }

    closeWarnings(){
        this.isShowingLoginWarning = false;
    }
}