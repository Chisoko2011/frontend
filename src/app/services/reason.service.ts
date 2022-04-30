import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ReasonService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  fetchReasons() {
    return this.http.get('http://localhost:3600/reasons');
  }

  submitReason(mrn: any, reason_id: any) {
    const hca_id = this.loginService.user_id;
    return this.http.get('http://localhost:3600/submit_reason?mrn='+mrn+'&reason_id='+reason_id+'&hca_id='+hca_id);
  }
}
