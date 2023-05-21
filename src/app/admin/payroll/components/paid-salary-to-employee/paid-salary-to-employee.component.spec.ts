import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaidSalaryToEmployeeComponent } from './paid-salary-to-employee.component'; 

describe('PaidSalaryToEmployeeComponent', () => {
  let component: PaidSalaryToEmployeeComponent;
  let fixture: ComponentFixture<PaidSalaryToEmployeeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidSalaryToEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidSalaryToEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
