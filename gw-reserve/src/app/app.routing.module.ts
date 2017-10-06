import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WhateverComponent } from './whatever/whatever.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoomComponent } from './room/room.component';
//imports the components to be used

const routes: Routes = [ //defines every single url on the sites and where it goes
    {
        path: "",//localhost/
        component: WelcomeComponent,
        pathMatch: "full"
    },
    {
        path: "room/:id",//localhost/whatever
        component: RoomComponent,
        pathMatch: "full"
    },
    {
        path: "whatever",//localhost/whatever
        component: WhateverComponent
    },
    /*{
        path: "",//localhost/
        redirectTo: "whatever",
        pathMatch: "full"
    },*/
    {
        path: "**", //catch all
        redirectTo: "",
        pathMatch: "full"
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes) //gets the route urls
    ],
    exports: [
        RouterModule //exports functions necessary to use this module elsewhere
    ]
})
export class AppRouting { }

export const routedComponents = [WelcomeComponent, RoomComponent, WhateverComponent]; //allows export of all components here
//won't have to write again wherever this is called AppRouting is imported