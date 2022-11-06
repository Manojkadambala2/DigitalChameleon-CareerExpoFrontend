import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface RecruiterInfo{
  name:string,
  email:string
}

interface CandidateInfo{
name:string,
email:string,
phone:string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  

  public loginCandidate(username:any, password:any): Observable<any> {
    const url = 'http://localhost:8080/api/users/candidate/authenticate';
    return this.http.post<CandidateInfo>(url, {username, password});
  }

  public loginRecruiter(username:any, password:any): Observable<any> {
    const url = 'http://localhost:8080/api/users/recruiter/authenticate';
    return this.http.post<RecruiterInfo>(url, {username, password});
  }

}
