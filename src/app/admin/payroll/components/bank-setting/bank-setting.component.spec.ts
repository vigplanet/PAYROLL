import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BankSettingComponent } from './bank-setting.component';

describe('FormValidationComponent', () => {
  let component: BankSettingComponent;
  let fixture: ComponentFixture<BankSettingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BankSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
