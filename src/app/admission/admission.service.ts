import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admission } from './admission.model';

@Injectable({
  providedIn: 'root',
})
export class AdmissionService {
  baseUrl: string = 'http://localhost:3000/admissions';

  constructor(private httpClient: HttpClient) {}

  getAllAdmission(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  createAdmission(admission: Admission): Observable<any> {
    return this.httpClient.post(this.baseUrl, admission);
  }
}
