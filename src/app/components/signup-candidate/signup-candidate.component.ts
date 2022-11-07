import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/signup.service';

@Component({
  selector: 'app-signup-candidate',
  templateUrl: './signup-candidate.component.html',
  styleUrls: ['./signup-candidate.component.css']
})
export class SignupCandidateComponent implements OnInit {
  emailId = new FormControl('', [Validators.required]);
  username= new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  skills = new FormControl('', [Validators.required]);
  //errors
  getEmailErrorMessage() {
    if (this.emailId.hasError('required')) {
      return 'Email is required';
    }
    return this.emailId.hasError('email') ? 'Please enter a valid email' : '';
  }
  getNameErrorMessage(){
    if(this.username.hasError('required')){
      return 'Name is required';
    }
    return; 
  }
  getPasswordErrorMessage(){
    if(this.username.hasError('required')){
      return 'Password is required';
    }
    return; 
  }
  getUsernameErrorMessage(){
    if(this.username.hasError('required')){
      return 'Username is required';
    }
    return; 
  }
  getSkillsErrorMessage(){
    if(this.skills.hasError('required')){
      return 'Skills are required';
    }
    return; 
  }

  saveCandidate(){
    this.signupService.saveCandidate(this.name.value, this.username.value, this.emailId.value, this.password.value, this.skills.value).subscribe(
      response => {
        alert("SignUp Successful");
        console.log(this.skills.value);
        this.router.navigateByUrl('');
    },error => {
      alert("Sorry sign-up not successful");
    }); 
  }


  constructor(private router: Router, private signupService : SignupService) { }

  ngOnInit(): void {
  }

}
