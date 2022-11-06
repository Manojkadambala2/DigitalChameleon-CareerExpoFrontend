import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRecruiterComponent } from './signup-recruiter.component';

describe('SignupRecruiterComponent', () => {
  let component: SignupRecruiterComponent;
  let fixture: ComponentFixture<SignupRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupRecruiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
