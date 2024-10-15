import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiphyApiService } from './services/giphy-service/giphy-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'giphy-app';

  constructor(service: GiphyApiService) { }
}
