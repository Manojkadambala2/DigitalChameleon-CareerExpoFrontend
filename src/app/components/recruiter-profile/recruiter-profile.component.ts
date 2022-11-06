import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.css']
})
export class RecruiterProfileComponent implements OnInit {

  user:any;
  name="";
  email="";
  phone="";

  updateRecruiterProfile(){
    this.userService.updateRecruiter(this.name, this.email, this.phone).subscribe(
      response =>{
        alert("Updated profile successfully");
      },error =>{
        alert("Oops! Not able to update your profile");
      }
    )
  }

  constructor(private userService : UserService) { 

  }

  ngOnInit(): void {
   this.user = JSON.parse(localStorage.getItem('user')|| "");
   this.name = this.user.name;
   this.email = this.user.email;
   this.phone = this.user.phone;
  }

}
