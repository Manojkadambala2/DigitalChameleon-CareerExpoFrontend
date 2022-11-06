import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent implements OnInit {

  jobRole = new FormControl('',[Validators.required]);
  company = new FormControl('',[Validators.required]);
  salary = new FormControl('',[Validators.required]);
  experience = new FormControl('',[Validators.required]);
  skills = new FormControl('',[Validators.required]);
  location = new FormControl('',[Validators.required]);
  description = new FormControl('',[Validators.required]);

  getJobErrorMessage(){
    if(this.jobRole.hasError('required')){
      return 'Job-Role is required';
    }
    return; 
  }
  getCompanyErrorMessage(){
    if(this.company.hasError('required')){
      return 'Company name is required';
    }
    return; 
  }
  getDescErrorMessage(){
    if(this.description.hasError('required')){
      return 'Description is required';
    }
    return; 
  }
  getSalaryErrorMessage(){
    if(this.salary.hasError('required')){
      return 'Salary is required';
    }
    return; 
  }
  getSkillsErrorMessage(){
    if(this.skills.hasError('required')){
      return 'Skills are required';
    }
    return; 
  }
  getLocErrorMessage(){
    if(this.location.hasError('required')){
      return 'Location is required';
    }
    return; 
  }
  getExpErrorMessage(){
    if(this.experience.hasError('required')){
      return 'Experience is required';
    }
    return; 
  }
  constructor(private jobService : JobService, private router : Router) { }

  saveJob(){
    this.jobService.saveJob(this.jobRole.value, this.company.value, this.salary.value, this.experience.value, this.location.value, this.skills.value,  this.description.value).subscribe(
      response => {
        alert("Job added successfully");
        this.router.navigateByUrl('/recruiterprofile/jobs');
      },error =>{
          alert("Sorry! not able to add the jobs");
      }
    )
  }

  ngOnInit(): void {
  }

}
