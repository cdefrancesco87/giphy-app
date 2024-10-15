import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { GiphyApiService } from '../../services/giphy-service/giphy-api.service';
import { GifObject } from '../../models/giphy.model';
import { Store } from '@ngrx/store';
import { DashboardFacade } from '../../store/dashboard/dashboard.facade';
import { GifCardComponent } from '../gif-card/gif-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    InfiniteScrollDirective,
    SearchBarComponent,
    GifCardComponent,
  ],
  providers: [DashboardFacade, GiphyApiService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public gifsDataResponse: GifObject[] = []; // Array to hold GIF data
  public items: string[] = []; // Array for items (not used in current code)
  private dashboardFacade = inject(DashboardFacade); // Injecting DashboardFacade
  private store = inject(Store); // Injecting Store

  constructor(public giphyApiService: GiphyApiService) {
    this.getGifs(); // Fetch initial GIFs
  }

  /**
   * Fetches GIFs from the facade and updates the gifsDataResponse array.
   *
   * This method subscribes to the gifs$ observable from the dashboardFacade
   * and updates the gifsDataResponse array with the received GIFs.
   *
   * @returns {void}
   */
  public getGifs(): void {
    this.dashboardFacade.gifs$.subscribe((gifs) => {
      this.gifsDataResponse = gifs;
    });
  }

  /**
   * Handles the search event to fetch GIFs based on the search query.
   *
   * This method is triggered when a search event occurs. It stores the search query
   * and resets the offset in localStorage. It then fetches the GIFs list based on the
   * search query using the dashboardFacade.
   *
   * @param {string} $event - The search query string.
   * @returns {void}
   */
  public search($event: string): void {
    localStorage.setItem('query', $event); // Store the search query in localStorage
    localStorage.setItem('offset', '0'); // Reset the offset
    this.gifsDataResponse = []; // Clear the existing GIFs list to show the new search results
    this.dashboardFacade.getGifsList($event);
  }

  /**
   * Handles the scroll event to update the offset and fetch more GIFs.
   *
   * This method is triggered when the user scrolls. It retrieves the current offset
   * from localStorage, increments it, and updates the offset in localStorage. It then
   * fetches more GIFs based on the updated offset and the current query stored in localStorage.
   *
   * - If the offset value in localStorage is not a valid number, an error is logged to the console.
   * - The updated offset and query are used to update the GIFs list via the `dashboardFacade`.
   * - A message 'Scrolled' is logged to the console after the operation.
   *
   * @returns {void}
   */
  public onScrolled(): void {
    const currentOffset = parseInt(localStorage.getItem('offset') || '0', 10);
    if (!isNaN(currentOffset)) {
      localStorage.setItem('offset', (currentOffset + 1).toString());
    } else {
      console.error('Invalid offset value in localStorage');
    }
    const query = localStorage.getItem('query') || '';
    this.dashboardFacade.updateGifsList(query, (currentOffset + 1));
  }

  /**
   * Handles the click event on a GIF card.
   *
   * This method is triggered when a GIF card is clicked. It logs the clicked
   * GIF item to the console.
   *
   * @param {any} item - The clicked GIF item.
   * @returns {void}
   */
  public onCardClick(item: any): void { }

  /**
   * Determines the colspan for a GIF card based on its dimensions.
   *
   * This method calculates the colspan for a GIF card. If the width of the GIF
   * is greater than its height, it returns 2; otherwise, it returns 1.
   *
   * @param {any} item - The GIF item with width and height properties.
   * @returns {number} - The colspan value (2 or 1).
   */
  public getColspan(item: GifObject): number {
    return item.images.preview_webp.width > item.images.preview_webp.height ? 2 : 1;
  }

  /**
   * Determines the rowspan for a GIF card based on its dimensions.
   *
   * This method calculates the rowspan for a GIF card. If the width of the GIF
   * is greater than its height, it returns 1; otherwise, it returns 2.
   *
   * @param {any} item - The GIF item with width and height properties.
   * @returns {number} - The rowspan value (1 or 2).
   */
  public getRowspan(item: any): number {
    return item.images.preview_webp.width > item.images.preview_webp.height ? 1 : 2;
  }
}
