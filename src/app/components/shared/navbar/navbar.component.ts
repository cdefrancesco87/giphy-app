import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../../models/navigation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() title: string = 'Giphy search gifs app';
  public navigationItems: NavigationItem[] = [
    { url: '/', title: 'Search gifs' },
    { url: '/favorites', title: 'Favorites gifs' }
  ];
}
