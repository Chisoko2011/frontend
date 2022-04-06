import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrdersListService {

  constructor(private http: HttpClient) { }

  fetchOrders() {
    return this.http.get('http://localhost:3600/ordersList');
  }

}