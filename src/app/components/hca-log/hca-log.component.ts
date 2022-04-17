import { Component, OnInit } from '@angular/core';
import { hcaService } from 'src/app/services/hca.service';

@Component({
  selector: 'app-hca-log',
  templateUrl: './hca-log.component.html',
  styleUrls: ['./hca-log.component.scss']
})
export class HcaLogComponent implements OnInit {

  constructor(private Service: hcaService ) { }
 
  columns = [
    { id: 'id', name: 'Id' },
    { id: 'firstname', name: 'First Name' },
    {id: 'lastname', name: 'Last Name'},
    {id: 'contactnumber', name: 'Contact Number'},
    {id: 'email', name: 'Email'}
  ]
rows = [];

  ngOnInit(): void {
    this.Service.fetchHcaLoggedin()
    .subscribe((data: any) => {
      this.rows = data;
      this.Service.loggedInHcas = data;
    });
  }

}
