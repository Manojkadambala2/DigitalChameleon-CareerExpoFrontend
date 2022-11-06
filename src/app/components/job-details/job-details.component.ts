import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/jobs';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  id:any;
  job:Jobs = {
    id: undefined,
    jobRole: undefined,
    company: undefined,
    experience: undefined,
    salary: undefined,
    location: undefined,
    skills: undefined,
    description: undefined
  };
  isApplied:any;

  constructor(private jobService : JobService) { }

  applyJobs(event: any, id: any){
    this.jobService.applyJobs(id).subscribe(
      response =>{
        this.isApplied = true;
        alert("Successfully applied");
      },error =>{
        alert("Sorry! Due to some error you are not able to apply for this job ");
      }
    )
  }

  ngOnInit(): void {
    this.id = this.jobService.getSelectedJob();
    this.jobService.getJobDetails(this.id).subscribe(
      response => {
        this.job = response;
      }
    );
    this.jobService.isApplied(this.id).subscribe(
      response=>{
        this.isApplied = response;
      },
      error=>{
        console.log(error.statusText);
      }
    )
  }

}
// error=>{
//   alert("Sorry for the inconvenience");
// }