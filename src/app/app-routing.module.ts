import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobsComponent } from './components/add-jobs/add-jobs.component';
import { FilenotfoundComponent } from './components/filenotfound/filenotfound.component';
import { AuthGuardGuard } from './components/guard/auth-guard.guard';
import {HomeComponent} from './components/home/home.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginCandidateComponent } from './components/login-candidate/login-candidate.component';
import { LoginRecruiterComponent } from './components/login-recruiter/login-recruiter.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { RecruiterProfileComponent } from './components/recruiter-profile/recruiter-profile.component';
import { SignupCandidateComponent } from './components/signup-candidate/signup-candidate.component';
import { SignupRecruiterComponent } from './components/signup-recruiter/signup-recruiter.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'loginCandidate', component: LoginCandidateComponent },
  { path: 'loginRecruiter', component: LoginRecruiterComponent },
  { path: 'signupCandidate', component:SignupCandidateComponent},
  { path: 'signupRecruiter', component:SignupRecruiterComponent},
  { path: 'candidateprofile', component:MyprofileComponent,
  children: [
    {
      path:'jobs', component: JobsComponent
    },
    {
      path:'jobdetails', component: JobDetailsComponent
    }],canActivate:[AuthGuardGuard]
  },
  { path: 'recruiterprofile', component:RecruiterProfileComponent,
  children: [
    {
      path:'jobs', component: JobsComponent
    },
    {
      path:'jobdetails', component: JobDetailsComponent
    },
    {
      path:'addJobs', component: AddJobsComponent
    },
  ],canActivate:[AuthGuardGuard]
  },
  {
    path        : '**',
    pathMatch   : 'full',
    component   : FilenotfoundComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
