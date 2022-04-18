import { Component, OnInit } from '@angular/core';
import { OrdersListService } from 'src/app/services/orders-list.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  firstName: any;
  lastName: any;
  mrn: any;
  ward_location: any;
  exam: any;

  constructor(private service: OrdersListService) { }

  ngOnInit(): void {
  }

  addOrder() {
   this.service.addNewOrder(this.mrn, this.firstName, this.lastName, this.ward_location, this.exam)
    .subscribe((data: any) => {
      alert('New Order Added');
    });
  }

}
