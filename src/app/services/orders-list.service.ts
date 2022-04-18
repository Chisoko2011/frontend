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

  addNewOrder(mrn: string, firstName: string, lastName: string, ward_location: string, exam: string) {
    return this.http.get('http://localhost:3600/add_order?mrn='+mrn+'&firstName='+firstName+'&lastName='+lastName+'&ward='+ward_location+'&exam='+exam);
  }

}