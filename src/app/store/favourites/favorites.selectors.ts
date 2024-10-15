import { createSelector } from '@ngrx/store';

export const selectFavorites = (state: any) => state.favorites;
export const selectFavoriteGifs = createSelector(
  selectFavorites,
  (favorites) => favorites.gifs
);
