import { createAction, props } from '@ngrx/store';
import { GifObject } from '../../models/giphy.model';

// Action to get the first batch of Gifs based on a search query
export const getGifsList = createAction(
  '[Dashboard] Get first batch of Gifs searched list',
  props<{ query: string }>()
);

// Action dispatched when the Gifs list is successfully retrieved
export const getGifsListSuccess = createAction(
  '[Dashboard] Search Gifs Success',
  props<{ gifs: GifObject[] }>()
);

// Action dispatched when there is an error retrieving the Gifs list
export const getGifsListFailure = createAction(
  '[Dashboard] Search Gifs Failure',
  props<{ error: any }>()
);

// Action to update the Gifs list with a new search query and offset
export const updateGifsList = createAction(
  '[Dashboard] Update Gifs searched list',
  props<{ query: string , offset: number }>()
);

// Action dispatched when the Gifs list is successfully updated
export const updateGifsListSuccess = createAction(
  '[Dashboard] Update Gifs Success',
  props<{ gifs: GifObject[] }>()
);

// Action dispatched when there is an error updating the Gifs list
export const updateGifsListFailure = createAction(
  '[Dashboard] Update Gifs Failure',
  props<{ error: any }>()
);

// Action to get the details of a specific Gif by its ID
export const getGifDetails = createAction(
  '[Dashboard] Get Gif Details',
  props<{ id: string }>()
);

// Action dispatched when the Gif details are successfully retrieved
export const getGifDetailsSuccess = createAction(
  '[Dashboard] Get Gif Details Success',
  props<{ gif: GifObject }>()
);

// Action dispatched when there is an error retrieving the Gif details
export const getGifDetailsFailure = createAction(
  '[Dashboard] Get Gif Details Failure',
  props<{ error: any }>()
);
