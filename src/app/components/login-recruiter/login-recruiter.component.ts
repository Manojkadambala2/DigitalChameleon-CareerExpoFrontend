import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'login-recruiter',
  templateUrl: './login-recruiter.component.html',
  styleUrls: ['./login-recruiter.component.css']
})
export class LoginRecruiterComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  getUsernameErrorMessage() {
    if (this.username.hasError('required')) {
      return 'Username is required';
    }
    return ;
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required';
    }
    return ;
  }

  recruiterLogin(){
    this.loginService.loginRecruiter(this.username.value, this.password.value).subscribe(
      response => {
         localStorage.setItem('user',JSON.stringify(response.user));
         localStorage.setItem('token', response.authToken);
         localStorage.setItem('role','recruiter');
         this.router.navigateByUrl('/recruiterprofile/jobs')
      },error => {alert(error.statusText);}
      
    )
  }

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit(): void {
  }

}
