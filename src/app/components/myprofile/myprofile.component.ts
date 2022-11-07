import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  user:any;
  name="";
  email="";
  phone="";
  skills="";

  updateProfile(){
    this.userService.updateCandidate(this.name, this.email, this.phone, this.skills).subscribe(
      response =>{
        alert("Profile updated successfully");
      },error =>{
        alert("Sorry! Not able to update your profile");
      }
    )
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  this.user = JSON.parse(localStorage.getItem('user')|| "");
   this.name = this.user.name;
   this.email = this.user.email;
   this.phone = this.user.phone;
   this.skills = this.user.skills;
  }

}
