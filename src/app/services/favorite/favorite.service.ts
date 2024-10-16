// src/app/services/favorite.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GifObject } from '../../models/giphy.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoritesSubject = new BehaviorSubject<GifObject[]>(
    this.getFavoritesFromLocalStorage()
  );
  favorites$ = this.favoritesSubject.asObservable();

  private getFavoritesFromLocalStorage(): GifObject[] {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  toggleFavorite(gifObject: GifObject): void {
    const favorites = this.getFavoritesFromLocalStorage();
    const index = favorites.findIndex((gif) => gif.id === gifObject.id);
    if (index === -1) {
      favorites.push(gifObject);
    } else {
      favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);
  }
}
