import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MonthlySalaryGenerateComponent } from './monthly-salary-generate.component';

describe('MonthlySalaryGenerateComponent', () => {
  let component: MonthlySalaryGenerateComponent;
  let fixture: ComponentFixture<MonthlySalaryGenerateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlySalaryGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlySalaryGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
