import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GifObject } from '../../../models/giphy.model';
import { MatIconModule } from '@angular/material/icon';
import { FavoriteService } from '../../../services/favorite/favorite.service';

const MAT_MODULES = [MatProgressSpinnerModule, MatIconModule];

@Component({
  selector: 'app-gif-card',
  standalone: true,
  imports: [CommonModule, MAT_MODULES],
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.scss',
})
export class GifCardComponent {
  @Input() public gifObject: GifObject = {} as GifObject;
  @Input() public from: string = 'favorites';

  public isFavorite = false;

  public imageSrc: string = '';
  public imageHeight: string = '';
  public imageWidth: string = '';
  public altText: string = '';
  public username: string = '';

  public isLoading = true;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    // Check if the current GIF is in the favorites list
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.isFavorite = favorites.some(
      (gif: GifObject) => gif.id === this.gifObject.id
    );
    // Initialize the component properties
    this.imageSrc = this.gifObject.images.fixed_width.url;
    this.imageHeight = this.gifObject.images.fixed_width.height;
    this.imageWidth = this.gifObject.images.fixed_width.width;
    this.altText = this.gifObject.title;
    this.username = this.gifObject.username;
  }

  /**
   * Toggles the favorite status of the current GIF object.
   *
   * This method logs the action to the console, switches the `isFavorite`
   * boolean flag, and calls the `toggleFavorite` method of the `favoriteService`
   * with the current GIF object.
   *
   * @remarks
   * - The method assumes that `this.gifObject` contains a valid GIF object with an `id` property.
   * - The `favoriteService` should have a `toggleFavorite` method that handles the logic for adding or removing the GIF from the favorites list.
   *
   */
  public toggleFavorite(): void {
    console.info('Add to favorites:', this.gifObject.id);
    this.isFavorite = !this.isFavorite;
    this.favoriteService.toggleFavorite(this.gifObject);
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
