import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface ICanDeactivate { //creates interface that tells it to expect a boolean
    canDeactivate: () => boolean;
}

@Injectable()
export class CanDeactivateService implements CanDeactivate<ICanDeactivate> {
    canDeactivate(component: ICanDeactivate) {
        const canComponentDeactivate = component.canDeactivate ? component.canDeactivate() : true;
        
        if (!canComponentDeactivate) alert("Action cancelled by CanDeactivateGuardService");
        
        return canComponentDeactivate;
    }
}