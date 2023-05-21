import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImportItemComponent } from './import-item.component';

describe('ImportItemComponent', () => {
  let component: ImportItemComponent;
  let fixture: ComponentFixture<ImportItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
