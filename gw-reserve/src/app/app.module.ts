import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//Gets angular stuff

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
        path: "",//localhost/
        redirectTo: "c1",
        pathMatch: "full"
    },
    {
        path: "**", //catch all
        component: NavComponent
    }
        
]

@NgModule({ //creates the module based on the imported components
    imports: [
        BrowserModule, //tells it these components are to be used in a browser
        RouterModule
    ],
    declarations: [
        AppComponent,
        WhateverComponent,
        NavComponent
    ],
    bootstrap: [
        AppComponent,
        WhateverComponent,
        NavComponent
    ]
})
export class AppModule { } //makes the appmodule to be imported