import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface RecruiterInfo{
  name:string,
  email:string,
  phone:string
}
interface CandidateInfo{
  name:string,
  email:string,
  phone:string,
  skills:string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  token=localStorage.getItem('token');

  headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.token});

  httpOptions = {
      headers:this.headers_object
  };

  public updateRecruiter(name:any, email:any, phone:any): Observable<any> {
    const url = 'http://localhost:8080/api/users';
    return this.http.put<RecruiterInfo>(url, {name, email, phone},this.httpOptions);
  }

  public updateCandidate(name:any, email:any, phone:any, skills:any): Observable<any> {
    const url = 'http://localhost:8080/api/users';
    return this.http.put<CandidateInfo>(url, {name, email, phone, skills},this.httpOptions);
  }
}
