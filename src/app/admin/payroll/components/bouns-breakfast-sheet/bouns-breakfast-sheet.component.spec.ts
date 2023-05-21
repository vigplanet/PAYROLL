import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BounsBreakfastSheetComponent } from './bouns-breakfast-sheet.component';

describe('BounsBreakfastSheetComponent', () => {
  let component: BounsBreakfastSheetComponent;
  let fixture: ComponentFixture<BounsBreakfastSheetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BounsBreakfastSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BounsBreakfastSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
