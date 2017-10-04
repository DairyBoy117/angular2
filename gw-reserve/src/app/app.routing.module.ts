import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WhateverComponent } from './whatever/whatever.component';
import { NavComponent } from './navigation/nav.component';
//import { C1Component } from './c1/c1.component';
//import { C2Component } from './c2/c2.component';
//imports the components to be used

const routes: Routes = [ //defines every single url on the sites and where it goes
    /*{
        path: "c1", //localhost/c1
        component: C1Component
    },
    {
        path: "c2",//localhost/c2
        component: C2Component
    },*/
    {
        path: "app",//localhost/app
        component: AppComponent
    },
    {
        path: "whatever",//localhost/whatever
        component: WhateverComponent
    },
    {
        path: "",//localhost/
        redirectTo: "app",
        pathMatch: "full"
    },
    {
        path: "**", //catch all
        component: AppComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes) //gets the route urls
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }