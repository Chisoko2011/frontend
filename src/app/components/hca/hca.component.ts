import { Component, OnInit } from '@angular/core';
import { OrdersListService } from '../../../app/services/orders-list.service';

@Component({
  selector: 'hca-list',
  templateUrl: './hca.component.html',
  styleUrls: ['./hca.component.scss']
})
export class hcaComponent implements OnInit {

  columns = [
    { id: 'patient_mrn', name: 'Patient MRN' },
    { id: 'firstname', name: 'First Name' },
    { id: 'lastname', name: 'Last Name' },
    { id: 'ward_location', name: 'Ward' },
    { id: 'hca_assigned', name: 'HCA Assigned' },
    { id: 'date_time_accepted', name: 'Date/Time Accepted' },
    { id: 'mode_of_transport', name: 'Mode_of_Transport' },
    { id: 'constraints', name: 'Constraints' },
  ];

  rows = [];

  constructor(private hcaService: OrdersListService) { }

  ngOnInit(): void {
    this.hcaService.fetchOrders()
      .subscribe((data: any) => {
        this.rows = data;
      });
  }

}
