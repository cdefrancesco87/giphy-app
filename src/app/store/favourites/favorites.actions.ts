import { createAction, props } from '@ngrx/store';

export const addFavorite = createAction(
  '[Favorites] Add GIF',
  props<{ gif: any }>()
);
export const removeFavorite = createAction(
  '[Favorites] Remove GIF',
  props<{ id: string }>()
);
