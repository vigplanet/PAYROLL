import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmployeeMasterComponent } from './employee-master.component';

describe('FormValidationComponent', () => {
  let component: EmployeeMasterComponent;
  let fixture: ComponentFixture<EmployeeMasterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
