import { Component, OnInit } from '@angular/core';
import { ReasonService } from 'src/app/services/reason.service';
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
    { id: 'exam', name: 'Exam' },
    { id: 'hca_assigned', name: 'HCA Assigned' },
    { id: 'started_at', name: 'Date/Time Started' },
    { id: 'arrived_at', name: 'Date/Time Arrived' },
    { id: 'reason', name: 'Reasons' },
  ];

  rows = [];
  reason_id: any;
  reasons: any;

  constructor(private hcaService: OrdersListService, private reasonService: ReasonService) { }

  ngOnInit(): void {
    this.hcaService.fetchOrdersHca()
      .subscribe((data: any) => {
        this.rows = data;
      });

    this.reasonService.fetchReasons()
    .subscribe((data: any) => {
      this.reasons = data;
    });
  }

  submitReason(mrn: any) {
    this.reasonService.submitReason(mrn, this.reason_id)
    .subscribe((data: any) => {
      this.ngOnInit();
    });
  }

}
