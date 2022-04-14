import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(firstName: string, lastName: string, email: string, contact_number: string, role: string, password: string) {
    return this.http.get('http://localhost:3600/register?firstName='+ firstName + '&lastName=' + lastName
    + '&email=' + email + '&contact_number=' + contact_number + '&role=' + role +
    '&password=' + password);
    
  }




}
