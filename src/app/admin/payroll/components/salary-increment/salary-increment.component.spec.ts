import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalaryIncrementComponent } from './salary-increment.component';

describe('FormValidationComponent', () => {
  let component: SalaryIncrementComponent;
  let fixture: ComponentFixture<SalaryIncrementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryIncrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
