import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { GifObject } from '../../../models/giphy.model';
import { ActivatedRoute } from '@angular/router';
import { GiphyApiService } from '../../../services/giphy-api/giphy-api.service';


@Component({
  selector: 'app-gif-details',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './gif-details.component.html',
  styleUrl: './gif-details.component.scss',
})
export class GifDetailsComponent {
  public gifObject: GifObject = {} as GifObject; // Object to hold GIF data

  public giphyLogoUrl = './assets/images/giphy-logo.png';

  constructor(
    private route: ActivatedRoute,
    private giphyService: GiphyApiService
  ) {}

  ngOnInit(): void {
    const gifId = this.route.snapshot.paramMap.get('id');
    // if (gifId) {
    //   this.giphyService
    //     .getGifById(gifId)
    //     .subscribe((gif: GiphyApiSingleGifResponse) => {
    //       this.gifObject = gif.data;
    //     });
    // }
  }
}
