import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../jobs';



@Injectable({
  providedIn: 'root'
})
export class JobService {
  id:any;
  constructor(private http : HttpClient) { }

  token=localStorage.getItem('token');

  headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.token});

  httpOptions = {
      headers:this.headers_object
  };


  public getJobs():Observable<any>{
    if(localStorage.getItem('role') === 'candidate'){
      const candidateUrl = 'http://localhost:8080/api/jobs';
      return this.http.get<any>(candidateUrl,this.httpOptions);
    }
    const recruiterUrl = 'http://localhost:8080/api/users/jobs';
    return this.http.get<any>(recruiterUrl,this.httpOptions);
  }

  public searchJobs(query:string):Observable<any>{
    const searchUrl = 'http://localhost:8080/api/jobs/search?q='+query;
    return this.http.get<any>(searchUrl,this.httpOptions);
  }

  public setSelectedJob(id:any){
    this.id = id;
  }

  public getSelectedJob(){
    return this.id;
  }
  public getJobDetails(id:any){
    const jobDetailUrl = 'http://localhost:8080/api/jobs/'+id;
    return this.http.get<any>(jobDetailUrl,this.httpOptions);
  }
  public isApplied(id:any){
    const applied = 'http://localhost:8080/api/users/candidate/isApplied/'+id;
    return this.http.get<any>(applied,this.httpOptions);
  }

  public applyJobs(id:any){
    const applyUrl = 'http://localhost:8080/api/users/candidate/'+id;
    return this.http.post<any>(applyUrl,{},this.httpOptions);
  }

  public getAppliedJobs(){
    const appliedJobsUrl = 'http://localhost:8080/api/users/candidate/applied_jobs'
    return this.http.get<any>(appliedJobsUrl,this.httpOptions);
  }

  public saveJob(jobRole:any, company:any, salary:any, experience:any, location:any, skills:any, description:any){
    const saveJob = 'http://localhost:8080/api/jobs';
    return this.http.post<any>(saveJob,{jobRole, company,salary,experience,location,skills,description},this.httpOptions);
  }
}
