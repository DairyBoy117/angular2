import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Gets angular stuff

import { AppRouting, routedComponents } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './navigation/nav.component';
//imports the components to be used

@NgModule({ //creates the module based on the imported components
    imports: [
        BrowserModule, //tells it these components are to be used in a browser
        AppRouting
    ],
    declarations: [
        AppComponent,
        NavComponent,
        routedComponents //gets components routed in the AppRouting module
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { } //makes the appmodule to be imported