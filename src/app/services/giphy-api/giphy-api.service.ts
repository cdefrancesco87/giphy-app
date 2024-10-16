import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS} from '../../models/endpoints';
import { environment } from '../../../environments/environment';
import {
  GiphyApiGifsListResponse,
  GiphyApiSingleGifResponse,
} from '../../models/giphy.model';

@Injectable({
  providedIn: 'root',
})
export class GiphyApiService {
  constructor(private http: HttpClient) {}

  /**
   * Searches for GIFs based on the provided query.
   *
   * @param query - The search term to query GIFs.
   * @param offset - The starting position of the results (default is 0).
   * @param limit - The maximum number of results to return (default is 50).
   * @returns An Observable of GiphyApiGifsListResponse containing the search results.
   */
  public searchGifs(
    query: string,
    offset: number = 0,
    limit: number = 50
  ): Observable<GiphyApiGifsListResponse> {
    return this.http.get<GiphyApiGifsListResponse>(
      `${ENDPOINTS.SEARCH_GIFS}?api_key=${environment.giphyApiKey}&q=${query}&limit=${limit}&offset=${offset}`
    );
  }

  /**
   * Searches for stickers using the Giphy API.
   *
   * @param query - The search term to query for stickers.
   * @param limit - The maximum number of results to return (default is 25).
   * @param offset - The number of results to skip from the beginning (default is 0).
   * @returns An Observable that emits the Giphy API response containing the search results.
   */
  public searchStickers(
    query: string,
    limit = 25,
    offset = 0
  ): Observable<GiphyApiGifsListResponse> {
    return this.http.get<GiphyApiGifsListResponse>(
      `${ENDPOINTS.SEARCH_STICKERS}/search?api_key=${environment.giphyApiKey}&q=${query}&limit=${limit}&offset=${offset}`
    );
  }

  /**
   * Fetches trending GIFs from the Giphy API.
   *
   * @param {number} [limit=25] - The number of GIFs to retrieve. Defaults to 25.
   * @param {number} [offset=0] - The offset for pagination. Defaults to 0.
   * @returns {Observable<GiphyApiGifsListResponse>} An observable containing the response from the Giphy API.
   */
  public getTrendingGifs(
    limit = 25,
    offset = 0
  ): Observable<GiphyApiGifsListResponse> {
    return this.http.get<GiphyApiGifsListResponse>(
      `${ENDPOINTS.TRENDING_GIFS}?api_key=$environment.giphyApiKey}&limit=${limit}&offset=${offset}`
    );
  }

  /**
   * Fetches trending stickers from the Giphy API.
   *
   * @param limit - The maximum number of stickers to return. Defaults to 25.
   * @param offset - The number of stickers to skip before starting to collect the result set. Defaults to 0.
   * @returns An Observable that emits the response from the Giphy API containing the trending stickers.
   */
  public getTrengingStickers(
    limit = 25,
    offset = 0
  ): Observable<GiphyApiGifsListResponse> {
    return this.http.get<GiphyApiGifsListResponse>(
      `${ENDPOINTS.TRENDING_STICKERS}?api_key=${environment.giphyApiKey}&limit=${limit}&offset=${offset}`
    );
  }

  /**
   * Fetches a GIF by its unique identifier.
   *
   * @param id - The unique identifier of the GIF to be fetched.
   * @returns An Observable that emits the response containing the GIF data.
   */
  public getGifById(id: string): Observable<GiphyApiSingleGifResponse> {
    return this.http.get<GiphyApiSingleGifResponse>(
      `${ENDPOINTS.GIF_BY_ID}${id}?api_key=${environment.giphyApiKey}`
    );
  }

  /**
   * Retrieves a sticker by its unique identifier.
   *
   * @param id - The unique identifier of the sticker.
   * @returns An Observable that emits the GiphyApiGifsListResponse containing the sticker data.
   */
  public getStickerById(id: string): Observable<GiphyApiSingleGifResponse> {
    return this.http.get<GiphyApiSingleGifResponse>(
      `${ENDPOINTS.STICKER_BY_ID}${id}?api_key=${environment.giphyApiKey}`
    );
  }
}
