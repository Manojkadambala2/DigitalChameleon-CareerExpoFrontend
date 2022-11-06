import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCandidateComponent } from './signup-candidate.component';

describe('SignupCandidateComponent', () => {
  let component: SignupCandidateComponent;
  let fixture: ComponentFixture<SignupCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
