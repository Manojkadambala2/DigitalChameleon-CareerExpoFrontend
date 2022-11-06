import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface RecruiterInfo{
    name:string,
    email:string
}
interface CandidateInfo{
  name:string,
  email:string,
  skills:string,
  resume:string
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {
   }

   public saveRecruiter(name:any, username:any, email:any, password:any): Observable<any> {
      const url = 'http://localhost:8080/api/users/recruiter/register';
      return this.http.post<RecruiterInfo>(url, {name, username, email, password});
    }

    public saveCandidate(name:any, username:any, email:any, password:any, skills:any):Observable<any>{
      const url = 'http://localhost:8080/api/users/candidate/register';
      return this.http.post<CandidateInfo>(url,{name,username, email, password, skills});
    }
}
