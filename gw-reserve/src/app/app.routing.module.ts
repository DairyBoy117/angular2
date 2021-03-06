﻿import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WhateverComponent } from './whatever/whatever.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoomComponent } from './room/room.component';
import { LogInRouterGuard } from './services/router-guard';
import { CanDeactivateService, ICanDeactivate } from './services/can-deactivate-guard';
//imports the components to be used

const routes: Routes = [ //defines every single url on the sites and where it goes
    {
        path: "welcome",//localhost/
        component: WelcomeComponent,
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
    // {
    //     path: "**", //catch all
    //     redirectTo: "welcome",
    //     pathMatch: "full"
    // }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes) //gets the route urls
    ],
    exports: [
        RouterModule //exports functions necessary to use this module elsewhere
    ],
    providers: [
        LogInRouterGuard, //tells angular it has access to route guard service
        CanDeactivateService
    ]
})
export class AppRouting { }

export const routedComponents = [WelcomeComponent, WhateverComponent]; //allows export of all components here
//won't have to write again wherever this is called AppRouting is imported