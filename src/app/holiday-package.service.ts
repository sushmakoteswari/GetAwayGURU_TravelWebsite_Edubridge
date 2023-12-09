import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HolidayPackageService {
  private baseUrl = 'http://localhost:8080/GetAwayGuru/packages';

  constructor(private http: HttpClient) {}

  getAllPackages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  getPackageById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createPackage(packageData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, packageData);
  }

  updatePackage(id: number, packageData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, packageData);
  }

  deletePackage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
