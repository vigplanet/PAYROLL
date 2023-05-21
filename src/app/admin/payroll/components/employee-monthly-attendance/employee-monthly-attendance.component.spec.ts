import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmployeeMonthlyAttendanceComponent } from './employee-monthly-attendance.component';

describe('EmployeeMonthlyAttendanceComponent', () => {
  let component: EmployeeMonthlyAttendanceComponent;
  let fixture: ComponentFixture<EmployeeMonthlyAttendanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMonthlyAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMonthlyAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
