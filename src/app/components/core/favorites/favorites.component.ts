import { Component } from '@angular/core';
import { GifCardComponent } from '../../shared/gif-card/gif-card.component';
import { GifObject } from '../../../models/giphy.model';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [GifCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  public gifsDataResponse: GifObject[] = []; // Array to hold GIF data

  constructor() {
    this.getFavorites(); // Fetch initial favorites
  }

  public getFavorites(): void {
    this.gifsDataResponse = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
  }

  public onCardClick(gifObject: GifObject): void {
    // console.info('GIF ID:', gifObject.id);
  }
}
