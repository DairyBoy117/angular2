import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CanDeactivateService } from "./../services/can-deactivate-guard";
import { LogInRouterGuard } from "./../services/router-guard";

import { RoomComponent } from "./room.component";
import { RoomFormComponent } from "./room-form/room-form.component";
import RoomListComponent from "./room-list/room-list.component";

const routes: Routes = [
	{
		path: "rooms/:id",
		component: RoomComponent,
		canActivate: [LogInRouterGuard],

		children: [
			{
				path: "form",
				component: RoomFormComponent,
				canDeactivate: [CanDeactivateService]
			},
			{
				path: "list",
				component: RoomListComponent
			},
			{
				path: "",
				redirectTo: "list",
				pathMatch: "full"
			},
			{
				path: "**",
				redirectTo: "/not/found",
				pathMatch: "full"
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	],
	providers: [
		CanDeactivateService,
		LogInRouterGuard
	]
})
export class RoomRoutingModule { }

export const routedComponents = [RoomComponent, RoomFormComponent, RoomListComponent];