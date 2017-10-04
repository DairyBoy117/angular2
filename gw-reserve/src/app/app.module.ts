import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Gets angular stuff

import { AppRouting } from './app.routing.module';
import { AppComponent } from './app.component';
import { WhateverComponent } from './whatever/whatever.component';
import { NavComponent } from './navigation/nav.component';
//import { C1Component } from './c1/c1.component';
//import { C2Component } from './c2/c2.component';
//imports the components to be used

@NgModule({ //creates the module based on the imported components
    imports: [
        BrowserModule, //tells it these components are to be used in a browser
        AppRouting
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