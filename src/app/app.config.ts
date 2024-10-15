import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { dashboardReducer } from './store/dashboard/dashboard.reducer';
import { provideEffects } from '@ngrx/effects';
import { DashboardEffects } from './store/dashboard/dashboard.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({ dashboardGifsList: dashboardReducer }),
    provideAnimationsAsync(),
    provideEffects([DashboardEffects]),
    provideRouter(routes),
  ],
};

