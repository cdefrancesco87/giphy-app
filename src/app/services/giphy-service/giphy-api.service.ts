import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS} from '../../models/endpoints';

@Injectable({
  providedIn: 'root',
})
export class GiphyApiService {

  private apiKey = 'dhTc3yRsj1LNS7LX8G47t5vPmyOCoLPv';

  constructor(private http: HttpClient) {}

  searchGifs(query: string, limit = 25, offset = 0): Observable<any> {
    return this.http.get(
      `${ENDPOINTS.SEARCH_GIFS}?api_key=${this.apiKey}&q=${query}&limit=${limit}&offset=${offset}`
    );
  };

  searchStickers(query: string, limit = 25, offset = 0): Observable<any> {
    return this.http.get(
      `${ENDPOINTS.SEARCH_STICKERS}/search?api_key=${this.apiKey}&q=${query}&limit=${limit}&offset=${offset}`
    );
  };

  getTrendingGifs(limit = 25, offset = 0): Observable<any> {
    return this.http.get(
      `${ENDPOINTS.TRENDING_GIFS}?api_key=${this.apiKey}&limit=${limit}&offset=${offset}`
    );
  };

  getTrengingStickers(limit = 25, offset = 0): Observable<any> {
    return this.http.get(
      `${ENDPOINTS.TRENDING_STICKERS}?api_key=${this.apiKey}&limit=${limit}&offset=${offset}`
    );
  };

  getGifById(id: string): Observable<any> {
    return this.http.get(
      `${ENDPOINTS.GIF_BY_ID}${id}?api_key=${this.apiKey}`
    );
  };

  getStickerById(id: string): Observable<any> {
    return this.http.get(
      `${ENDPOINTS.STICKER_BY_ID}${id}?api_key=${this.apiKey}`
    );
  };
}
