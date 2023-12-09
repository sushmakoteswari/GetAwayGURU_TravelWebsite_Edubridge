import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'travelWebsite';

  showNavbar = false;

  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.navbarService.showNavbar$.subscribe((show) => {
      this.showNavbar = show;
    });
  }

}