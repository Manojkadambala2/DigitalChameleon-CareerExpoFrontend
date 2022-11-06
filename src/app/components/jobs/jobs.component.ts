import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobs } from 'src/app/jobs';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  public jobs: Jobs[] =[];
  search="";
  isCandidate:any;
  constructor(private jobService : JobService, private router : Router) { }
  searchJobs(){
    this.jobService.searchJobs(this.search).subscribe(
      response => {
        if(response.jobs.length > 0){
          this.jobs = response.jobs;
        }
      }
    )
  }

  jobDetails(event:any,id:any){
    this.jobService.setSelectedJob(id);
    this.router.navigateByUrl('/candidateprofile/jobdetails');
  }

  getAppliedJobs(event:any){
    this.jobService.getAppliedJobs().subscribe(
      response => {
        if(response.jobs.length>0){
          this.jobs = response.jobs
        }else{
          alert("Sorry! you didn't applied to any job yet");
        }
      },
      error =>{
        alert(error.statusText);
      }
    )
  }
  ngOnInit(): void {
    this.jobService.getJobs().subscribe(
      response => this.jobs = response.jobs
    );
    if(localStorage.getItem('role') === 'candidate'){
        this.isCandidate = true;
    }
    else{
      this.isCandidate = false;
    }
  }

}
