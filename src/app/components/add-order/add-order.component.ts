import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';
import { OrdersListService } from 'src/app/services/orders-list.service';
import { WardsService } from 'src/app/services/wards.service';

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
  exams_list: any;
  wards_list: any;

  constructor(private service: OrdersListService, private examsService: ExamService, private wardsServicer: WardsService) { }

  ngOnInit(): void {
    this.examsService.fetchExams()
    .subscribe((data: any) => {
      this.exams_list = data;
    });

    this.wardsServicer.fetchWards()
    .subscribe((data: any) => {
      this.wards_list = data;
    });
  }

  addOrder() {
   this.service.addNewOrder(this.mrn, this.firstName, this.lastName, this.ward_location, this.exam)
    .subscribe((data: any) => {
      alert('New Order Added');
    });
  }

}
