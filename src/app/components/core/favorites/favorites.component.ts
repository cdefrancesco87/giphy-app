import { Component } from '@angular/core';
import { GifCardComponent } from '../../shared/gif-card/gif-card.component';
import { GifObject } from '../../../models/giphy.model';
import { FavoriteService } from '../../../services/favorite/favorite.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [GifCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  public favorites: GifObject[] = []; // Array to hold GIF data

  constructor(private favoriteService: FavoriteService) {
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
}
