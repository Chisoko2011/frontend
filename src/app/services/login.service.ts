
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username = '';

  constructor(private http: HttpClient) { }

login(username: string, userPassword: string) {
  console.log(username, userPassword)
  return this.http.get('http://localhost:3600/login?userfirstname='+ username + '&userpassword=' + userPassword);
  
}

logout(username: string) {
  return this.http.get('http://localhost:3600/logout?email='+ username);
}


}
