import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private _showNavbar = new BehaviorSubject<boolean>(false);
  showNavbar$ = this._showNavbar.asObservable();

  toggleNavbarVisibility(show: boolean): void {
    this._showNavbar.next(show);
  }
}