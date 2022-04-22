import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
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
    {id: 'order_status', name: 'Order Status'},
    { id: 'started_at', name: 'Date/Time Started' },
    { id: 'arrived_at', name: 'Date/Time Arrived' },
    { id: 'reasons', name: 'Reasons' }
  ]

  rows = [];

  constructor(private ordersListService: OrdersListService, private router: Router) { }

  updateSubscription: Subscription | undefined;

  
  ngOnInit(): void {
    this.fetchData();

    this.updateSubscription = interval(60000).subscribe(
      (val) => { 
        this.fetchData();
    })
  }

  fetchData() {
    this.ordersListService.fetchOrders()
    .subscribe((data: any) => {
      this.rows = data;
    });
  }

  assignHca(patient: any) {
    let navigationExtras = {
      state: {
        patient: patient
      }
    }
    this.router.navigate(['/hca_assign'], navigationExtras);
  }


}
