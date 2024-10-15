import { Component, Input } from '@angular/core';
import { GifObject } from '../../models/giphy.model';

@Component({
  selector: 'app-gif-card',
  standalone: true,
  imports: [],
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.scss',
})
export class GifCardComponent {
  @Input() gifObject: GifObject = {} as GifObject;

  constructor() {}

  /**
   * Handles the click event on the GIF card.
   *
   * This method is triggered when the user clicks on the GIF card. It logs the ID of the GIF to the console.
   *
   * @returns {void}
   */
  public onCardClick(): void { }
}
