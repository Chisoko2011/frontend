import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WardsService {

  constructor(private http: HttpClient) { }

  fetchWards() {
    return this.http.get('http://localhost:3600/wards');
  }
}
