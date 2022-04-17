import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class hcaService {
  loggedInHcas = []

  constructor(private http: HttpClient) { }

  fetchOrders() {
    return this.http.get('http://localhost:3600/ordersList');
  }

  fetchHcaLoggedin() {
    return this.http.get('http://localhost:3600/hca_loggedin');
  }

  assignHca(mrn: any, hca_id: any) {
    return this.http.get('http://localhost:3600/hca-assign?hca_id='+hca_id+'&mrn='+mrn);
  }

}