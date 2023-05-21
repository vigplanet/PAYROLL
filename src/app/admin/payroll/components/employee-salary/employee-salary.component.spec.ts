import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmployeeSalaryComponent } from './employee-salary.component';

describe('FormValidationComponent', () => {
  let component: EmployeeSalaryComponent;
  let fixture: ComponentFixture<EmployeeSalaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
