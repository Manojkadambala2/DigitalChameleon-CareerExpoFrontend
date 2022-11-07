import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn=false;
  constructor(private authService:AuthService, private router :Router) { }

  ngOnInit(): void {
    setInterval(() => {
      this.isLoggedIn = this.authService.isLoggedIn(); 
    },200);
  }

  logout(event:any){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.router.navigateByUrl('');
  }
  ngOnDestroy() {
  }

}
