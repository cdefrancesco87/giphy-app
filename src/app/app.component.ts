import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiphyApiService } from './services/giphy-service/giphy-api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'giphy-app';

  constructor(service: GiphyApiService) {
    service.getTrendingGifs().subscribe((response) => {
      console.log('Trending GIFs:', response);
    });
    service.searchGifs('ciao').subscribe((response) => {
      console.log('Ciao GIFs:', response);
    });
  }
}
