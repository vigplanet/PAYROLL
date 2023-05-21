import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BankSalaryGenerateComponent } from './bank-salary-generate.component'; 

describe('BankSalaryGenerateComponent', () => {
  let component: BankSalaryGenerateComponent;
  let fixture: ComponentFixture<BankSalaryGenerateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BankSalaryGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankSalaryGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
