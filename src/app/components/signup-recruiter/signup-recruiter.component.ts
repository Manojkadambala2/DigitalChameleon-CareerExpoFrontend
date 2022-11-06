import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/signup.service';

@Component({
  selector: 'app-signup-recruiter',
  templateUrl: './signup-recruiter.component.html',
  styleUrls: ['./signup-recruiter.component.css']
})
export class SignupRecruiterComponent implements OnInit {

  emailId = new FormControl('', [Validators.required]);
  username= new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);



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

  saveUser(){
    this.signupService.saveRecruiter(this.name.value, this.username.value,this.emailId.value, this.password.value).
    subscribe(response => {
      alert("SignUp Successful");
      this.router.navigateByUrl('');
    },error => {
      alert(error.statusText);}
    );
  }

  constructor(private signupService : SignupService, private router : Router) {
     
   }
  

  ngOnInit(): void {
  }

}
