import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { hcaService } from 'src/app/services/hca.service';

@Component({
  selector: 'app-hca-assigned',
  templateUrl: './hca-assigned.component.html',
  styleUrls: ['./hca-assigned.component.scss']
})
export class HcaAssignedComponent implements OnInit {

  patientData;
  assigned_hca: any;
  loggedInHcas: any;
  selected_hca: any;

  constructor(private router: Router, private service: hcaService) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.patientData = this.router.getCurrentNavigation()?.extras?.state?.['patient']
      console.log(this.patientData)
    }
   }

  ngOnInit(): void {
    this.service.fetchAvailableHcas()
    .subscribe((data: any) => {
      this.loggedInHcas = data;
    });
  }

  assignHca() {
    this.service.assignHca(this.patientData.patient_mrn, this.selected_hca)
    .subscribe((data: any) => {
      this.router.navigateByUrl('/orderList')
    });
  }

}
