import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GifObject } from '../../../models/giphy.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gif-card',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.scss',
})
export class GifCardComponent {
  @Input() public gifObject: GifObject = {} as GifObject;

  @Output() public onAddToFavorites = new EventEmitter<GifObject>();

  public imageSrc: string = '';
  public imageHeight: string = '';
  public imageWidth: string = '';
  public altText: string = '';
  public username: string = '';

  public isLoading = true;

  constructor() {}

  ngOnInit(): void {
    this.imageSrc = this.gifObject.images.fixed_width.url;
    this.imageHeight = this.gifObject.images.fixed_width.height;
    this.imageWidth = this.gifObject.images.fixed_width.width;
    this.altText = this.gifObject.title;
    this.username = this.gifObject.username;
  }

  /**
   * Handles the click event on the add GIF to favourites button.
   *
   * This method is triggered when the user clicks on the add GIF to favourites button.
   *
   * @returns {void}
   */
  public addToFavorites(): void {
    console.info('Add to favorites:', this.gifObject.id);
    this.onAddToFavorites.emit(this.gifObject);
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
