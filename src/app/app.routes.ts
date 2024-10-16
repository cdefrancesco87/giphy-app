import { Routes } from '@angular/router';
import { DashboardComponent } from './components/core/dashboard/dashboard.component';
import { GifDetailsComponent } from './components/core/gif-details/gif-details.component';
import { FavoritesComponent } from './components/core/favorites/favorites.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'gif/:id',
    component: GifDetailsComponent,
  },
];
