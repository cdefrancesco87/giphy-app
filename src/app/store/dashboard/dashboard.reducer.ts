import { createReducer, on } from '@ngrx/store';
import { GifObject } from '../../models/giphy.model';
import { getGifsListSuccess, updateGifsListSuccess } from './dashboard.actions';

// Define the state interface for the dashboard list
export interface DashboardListState {
  gifs: GifObject[]; // Array of GifObject representing the list of GIFs
}

// Define the feature key for the dashboard GIFs list
export const dashboardGifsListFeatureKey = 'dashboardGifsList'; // Feature key for the dashboard GIFs list

// Define the initial state for the dashboard list
export const initialState: DashboardListState = {
  gifs: [], // Start with an empty array of GIFs
};

// Create the reducer function for the dashboard list
export const dashboardReducer = createReducer(
  initialState,
  // Handle the getGifsListSuccess action
  on(getGifsListSuccess, (state, { gifs }) => ({
    ...state, // Spread the current state
    gifs: gifs // Update the gifs property with the new list of GIFs
  })),
  // Handle the updateGifsListSuccess action
  on(updateGifsListSuccess, (state, { gifs }) => ({
    ...state, // Spread the current state
    gifs: [...state.gifs, ...gifs], // Append the new GIFs to the existing list
  }))
);

