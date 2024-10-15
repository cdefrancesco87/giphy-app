import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { gif$, gifs$ } from './dashboard.selectors';
import { getGifDetails, getGifsList, updateGifsList } from './dashboard.actions';

/**
 * Facade class for managing hub-related state and actions.
 */
@Injectable()
export class DashboardFacade {
  constructor(private store: Store) {}

  /**
   * Observable stream of ALL gifs.
   */
  public gifs$ = this.store.select(gifs$);

  /**
   * Observable stream of a SINGLE gif.
   * @param id The ID of the project to retrieve.
   */
  public gif$ = (id: string) => this.store.pipe(select(gif$(id)));

  /**
   * Dispatches an action to retrieve first batch of gifs.
   */
  public getGifsList(query: string): void {
    this.store.dispatch(getGifsList({ query }));
  }

  /**
   * Dispatches an action to update gifs list.
   */
  public updateGifsList(query: string, offset: number): void {
    this.store.dispatch(updateGifsList({ query, offset }));
  }

  /**
   * Dispatches an action to retrieve gif details.
   */
  public getGifDetails(id: string): void {
    this.store.dispatch(getGifDetails({ id }));
  }
}
