import { Injectable } from '@angular/core';
import { GiphyApiService } from '../../services/giphy-api/giphy-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { getGifsList, getGifsListFailure, getGifsListSuccess, updateGifsList, updateGifsListSuccess } from './dashboard.actions';
import { GiphyApiResponse } from '../../models/giphy.model';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private giphyApiService: GiphyApiService
  ) {}

  /**
   * Effect that triggers the retrieval of gifs based on a query.
   * @returns An observable that emits actions to update the state with the retrieved gifs.
   */
  public getAllGifs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getGifsList),
      switchMap((action) =>
        this.giphyApiService.searchGifs(action.query).pipe(
          map((response: GiphyApiResponse) => {
            // localStorage.setItem('gifs', JSON.stringify(response.data));
            localStorage.setItem(
              'offset',
              response.pagination.offset.toString()
            );
            return getGifsListSuccess({ gifs: response.data });
          }),
          catchError((error) => of(getGifsListFailure({ error })))
        )
      )
    )
  );

  /**
   * Effect that triggers the retrieval of next page gifs.
   * @returns An observable that emits actions to update the state with the retrieved gifs.
   */
  public updateGifsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateGifsList),
      switchMap((action) =>
        this.giphyApiService.searchGifs(action.query, action.offset).pipe(
          map((response: GiphyApiResponse) => {
            localStorage.setItem(
              'offset',
              response.pagination.offset.toString()
            );
            return updateGifsListSuccess({ gifs: response.data });
          }),
          catchError((error) => of(getGifsListFailure({ error })))
        )
      )
    )
  );
}
