import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface ICanDeactivate { //creates interface that tells it to expect a boolean
    canDeactivate: () => boolean;
}

@Injectable()
export class CanDeactivateService implements CanDeactivate<ICanDeactivate> {
    canDeactivate(component: ICanDeactivate) {
        console.log(component);


        if (component.canDeactivate) { //gets a boolean to store in canDeactivate, only if canDeactivate function exists on the component
            return component.canDeactivate();
        }

        return true;
    }
}