import { Component, OnInit } from '@angular/core';
import { OrdersListService } from '../../../app/services/orders-list.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  columns = [
    {id: 'patient_mrn', name: 'Patient MRN'},
    { id: 'firstname', name: 'First Name' },
    {id: 'lastname', name: 'Last Name'},
    {id: 'ward_location', name: 'Ward'},
    {id: 'exam', name: 'Examination'},
    {id: 'ordered_at', name: 'Time Ordered'},
    {id: 'hca_assigned', name: 'HCA'},
  ]

  rows = [];

  constructor(private ordersListService: OrdersListService) { }

  ngOnInit(): void {
    this.ordersListService.fetchOrders()
    .subscribe((data: any) => {
      this.rows = data;
    });
  }



}
