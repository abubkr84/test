import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDisplayComponent } from './field-display.component';

describe('FieldDisplayComponent', () => {
  let component: FieldDisplayComponent;
  let fixture: ComponentFixture<FieldDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
