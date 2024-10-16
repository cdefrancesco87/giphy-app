import { Component, inject, Input } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { GifObject, GiphyApiSingleGifResponse } from '../../../models/giphy.model';
import { ActivatedRoute } from '@angular/router';
import { GiphyApiService } from '../../../services/giphy-api/giphy-api.service';
import { DashboardFacade } from '../../../store/dashboard/dashboard.facade';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';



const MAT_MODULES = [MatProgressSpinnerModule];
const SHARED_COMPONENTS = [HeaderComponent];
const SERVICES = [GiphyApiService, DashboardFacade];

@Component({
  selector: 'app-gif-details',
  standalone: true,
  imports: [CommonModule, MAT_MODULES, SHARED_COMPONENTS],
  providers: [SERVICES],
  templateUrl: './gif-details.component.html',
  styleUrl: './gif-details.component.scss',
})
export class GifDetailsComponent {
  public giphyLogoUrl: string = 'assets/images/GIPHY18px.png'; // URL for the Giphy logo

  public gifObject: GifObject = {} as GifObject; // Object to hold GIF data

  private dashboardFacade = inject(DashboardFacade); // Injecting DashboardFacade

  public isLoading: boolean = true; // Flag to indicate if the GIF is loading

  public imageSrc: string = ''; // URL for the GIF image
  public imageHeight: string = ''; // Height of the GIF image
  public imageWidth: string = ''; // Width of the GIF image
  public altText: string = ''; // Alt text for the GIF image
  public username: string = ''; // Username of the GIF uploader

  constructor(
    private route: ActivatedRoute,
    private giphyService: GiphyApiService
  ) {}

  ngOnInit(): void {
    // Get the GIF ID from the route parameters and fetch the GIF data from the store or API
    const gifId = this.route.snapshot.paramMap.get('id');
    if (gifId) {
      this.dashboardFacade.gifs$.subscribe((gifs: GifObject[]) => {
        const foundGif = gifs.find((gif) => gif.id === gifId);
        if (foundGif) {
          this.gifObject = foundGif;
          this.initComponentProperties();
        } else {
          this.giphyService
            .getGifById(gifId)
            .subscribe((gif: GiphyApiSingleGifResponse) => {
              this.gifObject = gif.data;
              this.initComponentProperties();
            });
        }
      });
    }
  }

  public initComponentProperties(): void {
    // Initialize the component properties
    this.imageSrc = this.gifObject.images.original.url;
    this.imageHeight = this.gifObject.images.original.height;
    this.imageWidth = this.gifObject.images.original.width;
    this.altText = this.gifObject.title;
    this.username = this.gifObject.username;
  }
  /**
   * Handles the load event for the GIF card component.
   *
   * This method is triggered when the GIF image has finished loading.
   * It sets the `isLoading` property to `false`, indicating that the loading process is complete.
   *
   * @remarks
   * This method is typically used to update the UI to reflect that the GIF
   * image is now fully loaded and ready for display.
   *
   */
  public onLoad() {
    this.isLoading = false;
  }

  /**
   * Handles the error event for the GIF card component.
   *
   * This method is triggered when an error occurs,
   * such as a failure to load a GIF.
   * It sets the `isLoading` flag to `false` to indicate
   * that the loading process has completed.
   *
   * @remarks
   * This method is crucial for providing a smooth user experience by handling errors gracefully.
   *
   */
  public onError() {
    this.isLoading = false;
    // gestisci l'errore, ad esempio mostra un'immagine di fallback
  }
}
