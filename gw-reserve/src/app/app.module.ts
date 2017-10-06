import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//Gets angular stuff

import { AppRouting, routedComponents } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './navigation/nav.component';
import { LoginComponent } from './login/login.component';
//imports the components to be used

import { LogInService } from './services/login.services';

@NgModule({ //creates the module based on the imported components
    imports: [
        BrowserModule, //tells it these components are to be used in a browser
        AppRouting,
        FormsModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        LoginComponent,
        routedComponents //gets components routed in the AppRouting module
    ],
    providers: [
        LogInService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { } //makes the appmodule to be imported