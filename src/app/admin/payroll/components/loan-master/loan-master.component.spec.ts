import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoanMasterComponent } from './loan-master.component';

describe('LoanMasterComponent', () => {
  let component: LoanMasterComponent;
  let fixture: ComponentFixture<LoanMasterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
