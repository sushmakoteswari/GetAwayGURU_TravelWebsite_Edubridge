// navbar.component.ts

import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showNavbar = false;

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.showNavbar$.subscribe((show) => {
      this.showNavbar = show;
    });
  }
}
