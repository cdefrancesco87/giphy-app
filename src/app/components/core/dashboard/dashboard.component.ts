import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { GiphyApiService } from '../../../services/giphy-api/giphy-api.service';
import { GifObject } from '../../../models/giphy.model';
import { DashboardFacade } from '../../../store/dashboard/dashboard.facade';
import { GifCardComponent } from '../../shared/gif-card/gif-card.component';
import { HeaderComponent } from "../../shared/header/header.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";

const MAT_MODULES = [MatGridListModule];  // Material modules used in the component
const SHARED_COMPONENTS = [SearchBarComponent, GifCardComponent, HeaderComponent];  // Shared components used in the component
const DIRECTIVES = [InfiniteScrollDirective]; // Directives used in the component

const SERVICES = [GiphyApiService, DashboardFacade];  // Services used in the component

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MAT_MODULES,
    SHARED_COMPONENTS,
    DIRECTIVES,
    NavbarComponent
  ],
  providers: [SERVICES],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public gifsDataResponse: GifObject[] = []; // Array to hold GIF data
  public items: string[] = []; // Array for items (not used in current code)
  private dashboardFacade = inject(DashboardFacade); // Injecting DashboardFacade

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
    this.dashboardFacade.updateGifsList(query, currentOffset + 1);
  }

  /**
   * Sorts the GIF cards based on the import date in either ascending or descending order.
   *
   * @param $event - A string indicating the sort order. It can be either 'asc' for ascending or 'desc' for descending.
   *
   * The function first checks the value of the `$event` parameter to determine the sort order.
   * - If the sort order is 'asc', it sorts the `gifsDataResponse` array in ascending order based on the `import_datetime` property of each GIF.
   * - If the sort order is 'desc', it sorts the `gifsDataResponse` array in descending order based on the `import_datetime` property of each GIF.
   *
   * The sorting is performed by creating a new array using the spread operator to avoid mutating the original array.
   * The `import_datetime` property is converted to a timestamp using `getTime()` for accurate comparison.
   */
  public sortCards($event: string): void {
    let sortOrder = $event;
    if (sortOrder === 'asc') {
      this.gifsDataResponse = [...this.gifsDataResponse].sort(
        (a, b) =>
          new Date(a.import_datetime).getTime() -
          new Date(b.import_datetime).getTime()
      );
    } else if (sortOrder === 'desc') {
      this.gifsDataResponse = [...this.gifsDataResponse].sort(
        (a, b) =>
          new Date(b.import_datetime).getTime() -
          new Date(a.import_datetime).getTime()
      );
    }
  }
}
