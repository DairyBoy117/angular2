import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; //brings in the appmodule created in app.module

platformBrowserDynamic().bootstrapModule(AppModule); // this is the line that tells Angular to start and where to start