import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from './favorites.actions';

export interface FavoritesState {
  gifs: any[];
}

const initialState: FavoritesState = {
  gifs: [],
};

export const favoriteReducer = createReducer(
  initialState,
  on(addFavorite, (state, { gif }) => ({
    ...state,
    gifs: [...state.gifs, gif],
  })),
  on(removeFavorite, (state, { id }) => ({
    ...state,
    gifs: state.gifs.filter((gif) => gif.id !== id),
  }))
);
