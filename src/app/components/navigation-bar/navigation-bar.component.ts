import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  buttonLogout() {
    this.loginService.logout()
    .subscribe((data: any) => {
      if (data.logout === true) {
        this.router.navigate(['login']);                            
        alert('Logout Success')
      } else {
        alert('Logout failed')
      }
    });
  }

}
