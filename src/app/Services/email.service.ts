// src/app/services/email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailDTO } from '../Models/email-dto.model';

@Injectable({
    providedIn: 'root'
  })
  export class EmailService {
    private apiUrl = '/api/email/send';  
  
    constructor(private http: HttpClient) { }
  
    sendEmail(email: EmailDTO): Observable<any> {
      return this.http.post(this.apiUrl, email);
    }
}