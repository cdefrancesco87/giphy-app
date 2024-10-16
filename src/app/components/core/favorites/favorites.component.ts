import { Component } from '@angular/core';
import { GifCardComponent } from '../../shared/gif-card/gif-card.component';
import { GifObject } from '../../../models/giphy.model';
import { FavoriteService } from '../../../services/favorite/favorite.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";
import { MatButtonModule } from '@angular/material/button';

const MAT_MODULES = [MatButtonModule]; // Array of Material modules
const SHARED_COMPONENTS = [GifCardComponent, HeaderComponent]; // Array of shared components

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MAT_MODULES, SHARED_COMPONENTS],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  public favorites: GifObject[] = []; // Array to hold GIF data

  constructor(
    private favoriteService: FavoriteService,
    private router: Router
  ) {
    // this.getFavorites(); // Fetch initial favorites
  }

  ngOnInit(): void {
    this.favoriteService.favorites$.subscribe((favorites) => {
      this.favorites = favorites;
    });
  }

  public onCardClick(gifObject: GifObject): void {
    // console.info('GIF ID:', gifObject.id);
  }

  public redirectToHome() {
    this.router.navigate(['/']);
  }
}
