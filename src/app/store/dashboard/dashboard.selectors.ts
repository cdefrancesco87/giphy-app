import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DashboardListState, dashboardGifsListFeatureKey } from "./dashboard.reducer";

/**
 * Returns the feature selector for the DashboardListState.
 * @returns The feature selector for the DashboardListState.
 */
export const getGifsFeature =
  createFeatureSelector<DashboardListState>(dashboardGifsListFeatureKey);

/**
 * Selector for retrieving the projects from the DashboardListState.
 */
export const gifs$ = createSelector(getGifsFeature, ({ gifs }) => gifs);

/**
 * Selector for retrieving a Gif by its ID from the DashboardListState.
 * @param id The ID of the Gif to retrieve.
 */
export const gif$ = (id: string) =>
  createSelector(getGifsFeature, ({ gifs }) =>
    gifs.find((gif) => gif.id === id)
  );
