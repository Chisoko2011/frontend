import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersListService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  fetchOrders() {
    return this.http.get('http://localhost:3600/ordersList');
  }

  fetchOrdersHca() {
    const hca_id = this.loginService.user_id;
    return this.http.get('http://localhost:3600/ordersListHca?hca_id='+hca_id);
  }

  addNewOrder(mrn: string, firstName: string, lastName: string, ward_location: string, exam: string) {
    return this.http.get('http://localhost:3600/add_order?mrn='+mrn+'&firstName='+firstName+'&lastName='+lastName+'&ward='+ward_location+'&exam='+exam);
  }

}