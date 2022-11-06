import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'login-candidate',
  templateUrl: './login-candidate.component.html',
  styleUrls: ['./login-candidate.component.css']
})
export class LoginCandidateComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required])
  
  hide = true;

  getUsernameErrorMessage() {
    if (this.username.hasError('required')) {
      return 'Username is required';
    }
    return;
  }
  getPasswordErrorMessage() {
    if (this.username.hasError('required')) {
      return 'Password is required';
    }
    return;
  }


  constructor(private loginService : LoginService,private router : Router) { }

  loginCandidate(){
    this.loginService.loginCandidate(this.username.value, this.password.value).subscribe(
      response => {
        localStorage.setItem('user',JSON.stringify(response.user));
        localStorage.setItem('token', response.authToken);
        localStorage.setItem('role','candidate');
        this.router.navigateByUrl('/candidateprofile/jobs');
      },error => {alert(error.statusText);}
    );
  }

  ngOnInit(): void {
  }

}
