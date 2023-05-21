import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DailyAttendanceMasterComponent } from './daily-attendance-master.component';

describe('DailyAttendanceMasterComponent', () => {
  let component: DailyAttendanceMasterComponent;
  let fixture: ComponentFixture<DailyAttendanceMasterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyAttendanceMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAttendanceMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
