import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  firstName = '';
  lastName = '';
  username = '';
  password = '';
  email = '';
  contact_number = '';
  role: any;


  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  registerClick() {
    this.registerService.register(this.firstName, this.lastName, this.email, this.contact_number, this.role, this.password)
    .subscribe((data: any) => {
      if (data.register === true) {
        console.log('here')
        this.router.navigate(['login']);                            
        alert('Register Success')
      } else {
        alert('Register failed')
      }
    });
  }
}
