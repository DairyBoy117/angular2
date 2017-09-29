import { Component } from '@angular/core'; //Gets stuff from angular

@Component({ //creates the component, specifies name and template files to use
    selector: 'austin-app',
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})
export class AppComponent { } //makes name of component to be imported elsewhere