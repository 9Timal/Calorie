import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule} from '@angular/forms'; //Nous permet de faire appel au FormsModule dans nos components

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  
    importProvidersFrom(FormsModule),
    provideHttpClient() //On lui dis que on aimerai importer FormsModule dans notre projet
    ]
};
