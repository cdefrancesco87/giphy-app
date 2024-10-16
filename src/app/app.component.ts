import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiphyApiService } from './services/giphy-api/giphy-api.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'giphy-app';

  constructor(service: GiphyApiService) { }
}
