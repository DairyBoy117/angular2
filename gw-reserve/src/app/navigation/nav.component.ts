import { Component } from '@angular/core';

interface NavItem {
    Name: string,
    URL: string,
};

@Component({
    selector: 'nav-app',
    templateUrl: './nav.html',
    styleUrls: ['./nav.css']
})
export class NavComponent {
    public navItems: NavItem[] = [];

    constructor() {
        this.navItems = [
            {
                Name: 'Room 1',
                URL: 'whatever'
            },
            {
                Name: 'Room 2',
                URL: 'room2'
            }
        ];
    }
}