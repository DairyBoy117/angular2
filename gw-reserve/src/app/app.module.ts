import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//Gets angular stuff

import { AppRouting, routedComponents } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './navigation/nav.component';
import { LoginComponent } from './login/login.component';
import { RoomFormComponent } from './room/room-form/room-form.component';
//imports the components to be used

import { LogInService } from './services/login.services';
import { RoomService } from './services/room.service';

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
        RoomFormComponent,
        routedComponents //gets components routed in the AppRouting module
    ],
    providers: [
        LogInService,
        RoomService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { } //makes the appmodule to be imported