import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  private apiUrl = 'http://localhost:8080'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  saveHolidayPackage(packageData: any, image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('name', packageData.name);
    formData.append('description', packageData.description);
    formData.append('location', packageData.location);
    formData.append('category', packageData.category);
    formData.append('price', packageData.price.toString());

    if (image) {
      formData.append('photo', image, image.name);
    }

    return this.http.post<any>(`${this.apiUrl}/saveHolidayPackage`, formData, httpOptions);
  }

  // Add more methods for fetching and other operations if needed
}
