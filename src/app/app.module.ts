import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginCandidateComponent } from './components/login-candidate/login-candidate.component';
import { LoginRecruiterComponent } from './components/login-recruiter/login-recruiter.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SignupCandidateComponent } from './components/signup-candidate/signup-candidate.component';
import { SignupRecruiterComponent } from './components/signup-recruiter/signup-recruiter.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { RecruiterProfileComponent } from './components/recruiter-profile/recruiter-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { AddJobsComponent } from './components/add-jobs/add-jobs.component';
import { FilenotfoundComponent } from './components/filenotfound/filenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginCandidateComponent,
    LoginRecruiterComponent,
    SignupCandidateComponent,
    SignupRecruiterComponent,
    MyprofileComponent,
    RecruiterProfileComponent,
    JobsComponent,
    JobDetailsComponent,
    AddJobsComponent,
    FilenotfoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
