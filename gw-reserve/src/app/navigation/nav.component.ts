import { Component } from '@angular/core';

interface NavItem {
    Name: string,
    URL: string,
};

@Component({
    selector: 'navigation',
    templateUrl: './nav.html',
    styleUrls: ['./nav.css']
})
export class NavComponent {
    public navItems: NavItem[] = [];

    constructor() {
        this.navItems = [
            {
                Name: 'Home',
                URL: ''
            },
            {
                Name: 'Halo',
                URL: 'rooms/halo'
            },
            {
                Name: 'Donkey Kong',
                URL: 'rooms/donkey-kong'
            },
            {
                Name: 'Whatever',
                URL: 'whatever'
            }
        ];
    }
}