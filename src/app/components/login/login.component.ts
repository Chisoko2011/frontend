import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  userPassword: string = '';
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  
 buttonClick () {
   console.log(this.userName, this.userPassword)
  this.loginService.login(this.userName, this.userPassword)
  .subscribe((data: any) => {
    if (data.login === true) {
      this.loginService.username = this.userName;
      if (data.role === 'radiographer') {
        this.router.navigate(['orderList']);
      } else if (data.role === 'hca') {
        this.router.navigate(['hca']);
      }
    } else {
      alert('Login failed')
    }
  });
  }
}
